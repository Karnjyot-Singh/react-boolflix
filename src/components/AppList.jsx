import AppCard from "./AppCard";

function AppList({items, sectionTitle}) {
    return (
        <section>
        <h2>{sectionTitle}</h2>
        <div>
          {items.map(item => (
            <AppCard key={item.id} curItem={item}/>
          ))}
        </div>
      </section>
    )
}

export default AppList;