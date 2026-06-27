import styles from "./ProposalCard.module.css";

import { Link } from "react-router-dom";

import {
  IndianRupee,
  CalendarDays,
  ArrowRight
} from "lucide-react";

const ProposalCard = ({ proposal }) => {

  const statusClass = {
    PENDING: styles.pending,
    ACCEPTED: styles.accepted,
    REJECTED: styles.rejected
  };

  return (

    <div className={styles.card}>

      {/* Top */}

      <div className={styles.header}>

        <div>

          <h3>{proposal.projectId.title}</h3>

          <p>
            Submitted on{" "}
            {new Date(proposal.createdAt).toLocaleDateString()}
          </p>

        </div>

        <span
          className={`${styles.status} ${statusClass[proposal.status]}`}
        >
          {proposal.status}
        </span>

      </div>

      {/* Cover Letter */}

      <p className={styles.coverLetter}>

        {proposal.coverLetter.length > 150
          ? proposal.coverLetter.slice(0, 150) + "..."
          : proposal.coverLetter}

      </p>

      {/* Footer */}

      <div className={styles.footer}>

        <div className={styles.bid}>

          <IndianRupee size={18} />

          <span> {proposal.bidAmount}</span>

        </div>

        <div className={styles.date}>

          <CalendarDays size={18} />

          <span>
            {new Date(proposal.createdAt).toLocaleDateString()}
          </span>

        </div>

        <Link
          to={`/projects/${proposal.projectId._id}`}
          className={styles.viewBtn}
        >

          View Project

          <ArrowRight size={16} />

        </Link>

      </div>

    </div>

  );

};

export default ProposalCard;