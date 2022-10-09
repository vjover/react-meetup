import classes from "./MainNavigation.module.css";

export default function MainNavigation({ setPage }) {
  return (
    <header className={classes.header} data-test="navigation-header">
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <a href="/" >
              All Meetups
            </a>
          </li>

          <li>
            <a href="/new-meetup" >
              Add New Meetup
            </a>
          </li>
          <li>
            <a href="/favorites" >
              My Favorites
              <span className={classes.badge}>{0}</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
