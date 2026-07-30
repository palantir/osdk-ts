import{j as t}from"./iframe-oJ2FO9gh.js";import{O as i}from"./object-table-DDfdUfwh.js";import{E as l}from"./Employee-BAk2o20h.js";import{g as F,o as M,c as W,T as P,b as h,a as u,e as f,s as b}from"./objectTableStoryHelpers-Bpzz5_WR.js";import"./preload-helper-CvpglEc3.js";import"./Table-Daq1nRPv.js";import"./index-BV7N8IQq.js";import"./Dialog-rr-wanT4.js";import"./cross-JrXM6Q4E.js";import"./svgIconContainer-DrpVPmB5.js";import"./useBaseUiId--8htrZkx.js";import"./InternalBackdrop-WR8b6Qpn.js";import"./composite-DNBMgSTn.js";import"./index-Cc835WrV.js";import"./index-Cs1NT0zx.js";import"./index-DYZJDtdA.js";import"./useEventCallback-Bkdj3IwB.js";import"./SkeletonBar-DmHtdZfF.js";import"./LoadingCell-CnxTs2mT.js";import"./ColumnConfigDialog-xt-kq9cY.js";import"./DraggableList-BLmy14XX.js";import"./search-YW5i8NVp.js";import"./Input-Bnt9eVNU.js";import"./useControlled-C3SPN_RN.js";import"./isEqual-CIsSANAT.js";import"./isObject-CZVCdMvb.js";import"./Button-f6PsM82T.js";import"./ActionButton-DBjSnZHs.js";import"./Checkbox-D_GgxpAc.js";import"./useValueChanged-EI4pgMLr.js";import"./CollapsiblePanel-Clqftq_k.js";import"./MultiColumnSortDialog-CJ4QNJt3.js";import"./MenuTrigger-wCrramWO.js";import"./CompositeItem-Dq5Pjrzb.js";import"./ToolbarRootContext-KIChva0u.js";import"./getDisabledMountTransitionStyles-BdOIDXL5.js";import"./getPseudoElementBounds-BJpCkOYE.js";import"./chevron-down-Ba4HOL7F.js";import"./index-Bm7cqmq_.js";import"./error-B9ewsirH.js";import"./BaseCbacBanner-wohGbFNN.js";import"./makeExternalStore-D6lsgFI3.js";import"./Tooltip-C1gKNyzG.js";import"./PopoverPopup-BQM51qRN.js";import"./toNumber-B6mridBS.js";import"./useOsdkClient-BRxg0s9r.js";import"./tick-CRJBTjv9.js";import"./DropdownField-CBUm68iK.js";import"./withOsdkMetrics-BAaL3YVb.js";const{expect:a,fn:I,waitFor:o,within:c}=__STORYBOOK_MODULE_TEST__,Re={...M,title:"Components/ObjectTable/Features/Columns"},s={args:{objectType:l,columnDefinitions:[{locator:{type:"property",id:"fullName"},pinned:"left"},{locator:{type:"property",id:"emailPrimaryWork"}},{locator:{type:"property",id:"jobTitle"}},{locator:{type:"property",id:"department"},pinned:"right"},{locator:{type:"property",id:"firstFullTimeStartDate"}}],onColumnsPinnedChanged:I()},parameters:{docs:{source:{code:`const columnDefinitions = [
  {
    locator: { type: "property", id: "fullName" },
    pinned: "left",
  },
  {
    locator: { type: "property", id: "emailPrimaryWork" },
  },
  {
    locator: { type: "property", id: "jobTitle" },
  },
  {
    locator: { type: "property", id: "department" },
    pinned: "right",
  },
  {
    locator: { type: "property", id: "firstFullTimeStartDate" },
  },
];

<ObjectTable
  objectType={Employee}
  columnDefinitions={columnDefinitions}
/>`}}},render:e=>t.jsx("div",{className:"object-table-container",style:{height:"600px"},children:t.jsx(i,{...e})}),play:async({canvasElement:e,args:n})=>{const r=c(e),g=await h(r,"fullName"),R=await h(r,"department");await a(g).toHaveAttribute("data-pinned","left"),await a(R).toHaveAttribute("data-pinned","right"),await u(r,"fullName"),await f("Unpin Column"),await o(()=>a(g).toHaveAttribute("data-pinned","false")),await a(n.onColumnsPinnedChanged).toHaveBeenCalled(),await u(r,"fullName"),await f("Pin column"),await o(()=>a(g).toHaveAttribute("data-pinned","left"))}},p={render:()=>{const e=[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"rdp",id:"managerName",creator:r=>r.pivotTo("lead").selectProperty("fullName")},renderHeader:()=>"Manager",renderCell:r=>"managerName"in r?t.jsx("span",{children:r.managerName}):t.jsx("span",{style:{color:"#999"},children:"No Manager"})}],n={managerName:{$in:[P,"Fatima Zhang"]}};return t.jsx("div",{className:"object-table-container",style:{height:"600px"},children:t.jsx(i,{objectType:l,columnDefinitions:e,defaultOrderBy:[{property:"managerName",direction:"asc"}],filter:n})})},play:async({canvasElement:e})=>{const n=c(e);await n.findByText("Manager"),await o(()=>a(n.getAllByRole("row").length).toBeGreaterThan(1)),await h(n,"managerName"),await o(()=>a(b(n,"managerName")).toBe("asc")),await u(n,"managerName"),await f("Sort descending"),await o(()=>a(b(n,"managerName")).toBe("desc")),await u(n,"managerName"),await f("Sort ascending"),await o(()=>a(b(n,"managerName")).toBe("asc"))},parameters:{docs:{description:{story:"Combines derived property columns with `defaultOrderBy` and `filter`. Demonstrates sorting by an RDP (managerName) and filtering the derived property."},source:{code:`type RDPs = { managerName: "string" };

const columnDefinitions: ColumnDefinition<Employee, RDPs>[] = [
  { locator: { type: "property", id: "fullName" } },
  { locator: { type: "property", id: "department" } },
  {
    locator: {
      type: "rdp",
      id: "managerName",
      creator: (baseObjectSet) =>
        baseObjectSet.pivotTo("lead").selectProperty("fullName"),
    },
    renderHeader: () => "Manager",
    renderCell: (object) => {
      if ("managerName" in object) {
        return <span>{object["managerName"]}</span>;
      }
      return <span style={{ color: "#999" }}>No Manager</span>;
    },
  },
];

const filter: WhereClause<Employee, RDPs> = {
  managerName: { $in: [TARGET_DATA, "Fatima Zhang"] },
};

<ObjectTable
  objectType={Employee}
  columnDefinitions={columnDefinitions}
  defaultOrderBy={[{ property: "managerName", direction: "asc" }]}
  filter={filter}
/>`}}}},m={args:{objectType:l,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"function",id:"seniority",queryDefinition:F,getFunctionParams:e=>({employees:e}),getKey:e=>String(e.$primaryKey),getValue:e=>e},renderHeader:()=>"Seniority",width:120}]},parameters:{docs:{description:{story:"Use function-backed columns to display computed values from a Foundry query. The 'Seniority' column calls `getEmployeeSeniority` with the current object set and maps each result back to the corresponding row."},source:{code:`import { getEmployeeSeniority } from "./ontology/queries";

type SeniorityFunctions = { seniority: typeof getEmployeeSeniority };

const columnDefinitions: ColumnDefinition<Employee, {}, SeniorityFunctions>[] = [
  { locator: { type: "property", id: "fullName" } },
  { locator: { type: "property", id: "department" } },
  {
    locator: {
      type: "function",
      id: "seniority",
      queryDefinition: getEmployeeSeniority,
      getFunctionParams: (objectSet) => ({ employees: objectSet }),
      getKey: (object) => String(object.$primaryKey),
      getValue: (cellData) => cellData,
    },
    renderHeader: () => "Seniority",
    width: 120,
  },
];

<ObjectTable objectType={Employee} columnDefinitions={columnDefinitions} />`}}},render:e=>t.jsx("div",{className:"object-table-container",style:{height:"600px"},children:t.jsx(i,{...e})}),play:async({canvasElement:e})=>{const n=c(e);await n.findByText("Seniority"),await o(()=>a(n.getAllByText(/^(Senior|Mid|Junior|Unknown)$/u).length).toBeGreaterThan(0))}},d={parameters:{docs:{source:{code:`const customColumnDefinition = [
      ...columnDefinitions,
      {
        locator: {
          type: "custom",
          id: "actions",
        },
        renderHeader: () => "Actions",
        renderCell: (object: any) => {
          return (
            <div style={{ display: "flex", gap: "8px" }}>
              <button
                onClick={() => {}}
              >
                View
              </button>
              <button
                onClick={() => {}}
              >
                Edit
              </button>
            </div>
          );
        },
        orderable: false,
        width: 120,
      },
    ]
    
    return  <ObjectTable objectType={Employee} columnDefinitions={customColumnDefinition} />
    `}}},args:{objectType:l,columnDefinitions:[...W.slice(0,3),{locator:{type:"custom",id:"actions"},renderHeader:()=>"Actions",renderCell:e=>t.jsxs("div",{style:{display:"flex",gap:"8px"},children:[t.jsx("button",{style:{padding:"4px 8px",fontSize:"12px",border:"1px solid #d1d5db",borderRadius:"4px",background:"white",cursor:"pointer"},onClick:()=>alert(`View ${e.fullName}`),children:"View"}),t.jsx("button",{style:{padding:"4px 8px",fontSize:"12px",border:"1px solid #d1d5db",borderRadius:"4px",background:"white",cursor:"pointer"},onClick:()=>alert(`Edit ${e.fullName}`),children:"Edit"})]}),orderable:!1,width:120}]},render:e=>t.jsx("div",{className:"object-table-container",style:{height:"600px"},children:t.jsx(i,{...e})}),play:async({canvasElement:e})=>{const n=c(e);await a((await n.findAllByRole("button",{name:"View"})).length).toBeGreaterThan(0),await a(n.getByText("Actions")).toBeInTheDocument(),await a(n.getAllByRole("button",{name:"Edit"}).length).toBeGreaterThan(0)}},y={args:{objectType:l,columnDefinitions:[{locator:{type:"property",id:"fullName"},renderHeader:()=>t.jsx("a",{href:"#",className:"header-link",onClick:e=>{e.preventDefault(),alert("Employee Name column clicked!")},children:"Employee Name"})},{locator:{type:"property",id:"emailPrimaryWork"}},{locator:{type:"property",id:"jobTitle"},renderHeader:()=>"Job Title"},{locator:{type:"custom",id:"employment-status"},renderHeader:()=>"Employment Status",renderCell:e=>{const n=e.firstFullTimeStartDate,r=n&&new Date(n)<=new Date;return t.jsx("span",{className:`status-tag ${r?"active":"inactive"}`,children:r?"Active":"Inactive"})},width:140},{locator:{type:"property",id:"department"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
  {
    locator: { type: "property", id: "fullName" },
    renderHeader: () => (
      <a
        href="#"
        className="header-link"
        onClick={(e) => {
          e.preventDefault();
          alert("Employee Name column clicked!");
        }}
      >
        Employee Name
      </a>
    ),
  },
  {
    locator: { type: "property", id: "emailPrimaryWork" },
  },
  {
    locator: { type: "property", id: "jobTitle" },
    renderHeader: () => "Job Title",
  },
  {
    locator: {
      type: "custom",
      id: "employment-status",
    },
    renderHeader: () => "Employment Status",
    renderCell: (employee) => {
      const startDate = employee["firstFullTimeStartDate"];
      const isActive = startDate && new Date(startDate) <= new Date();

      return (
        <span className={\`status-tag \${isActive ? "active" : "inactive"}\`}>
          {isActive ? "Active" : "Inactive"}
        </span>
      );
    },
    width: 140,
  },
  {
    locator: { type: "property", id: "department" },
  },
];

<ObjectTable objectType={Employee} columnDefinitions={columnDefinitions} />`}}},render:e=>t.jsx("div",{className:"object-table-container",style:{height:"600px"},children:t.jsx(i,{...e})}),play:async({canvasElement:e})=>{const n=c(e);await n.findByText(P),await a(n.getByRole("link",{name:"Employee Name"})).toBeInTheDocument(),await a(n.getByText("Employment Status")).toBeInTheDocument(),await a(n.getAllByText(/^(Active|Inactive)$/u).length).toBeGreaterThan(0)}};var v,w,D;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: [{
      locator: {
        type: "property",
        id: "fullName"
      },
      pinned: "left"
    }, {
      locator: {
        type: "property",
        id: "emailPrimaryWork"
      }
    }, {
      locator: {
        type: "property",
        id: "jobTitle"
      }
    }, {
      locator: {
        type: "property",
        id: "department"
      },
      pinned: "right"
    }, {
      locator: {
        type: "property",
        id: "firstFullTimeStartDate"
      }
    }],
    onColumnsPinnedChanged: fn()
  },
  parameters: {
    docs: {
      source: {
        code: \`const columnDefinitions = [
  {
    locator: { type: "property", id: "fullName" },
    pinned: "left",
  },
  {
    locator: { type: "property", id: "emailPrimaryWork" },
  },
  {
    locator: { type: "property", id: "jobTitle" },
  },
  {
    locator: { type: "property", id: "department" },
    pinned: "right",
  },
  {
    locator: { type: "property", id: "firstFullTimeStartDate" },
  },
];

<ObjectTable
  objectType={Employee}
  columnDefinitions={columnDefinitions}
/>\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable {...args} />
    </div>,
  // fullName is pinned left and department pinned right by default. Unpinning a
  // column and re-pinning it through the header menu returns it to its pinned
  // state, firing onColumnsPinnedChanged each time.
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const fullNameHeader = await getColumnHeader(canvas, "fullName");
    const departmentHeader = await getColumnHeader(canvas, "department");
    await expect(fullNameHeader).toHaveAttribute("data-pinned", "left");
    await expect(departmentHeader).toHaveAttribute("data-pinned", "right");

    // Unpin fullName via its header menu.
    await openHeaderMenu(canvas, "fullName");
    await clickHeaderMenuItem("Unpin Column");
    await waitFor(() => expect(fullNameHeader).toHaveAttribute("data-pinned", "false"));
    await expect(args.onColumnsPinnedChanged).toHaveBeenCalled();

    // Re-pin it to restore the default left-pinned state.
    await openHeaderMenu(canvas, "fullName");
    await clickHeaderMenuItem("Pin column");
    await waitFor(() => expect(fullNameHeader).toHaveAttribute("data-pinned", "left"));
  }
}`,...(D=(w=s.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var T,j,N;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => {
    type RDPs = {
      managerName: "string";
    };
    const columnDefinitions: ColumnDefinition<Employee, RDPs>[] = [{
      locator: {
        type: "property",
        id: "fullName"
      }
    }, {
      locator: {
        type: "property",
        id: "department"
      }
    }, {
      locator: {
        type: "rdp",
        id: "managerName",
        creator: (baseObjectSet: DerivedProperty.Builder<Employee, false>) => baseObjectSet.pivotTo("lead").selectProperty("fullName")
      },
      renderHeader: () => "Manager",
      renderCell: (object: Osdk.Instance<Employee>) => {
        if ("managerName" in object) {
          return <span>{object.managerName as string}</span>;
        }
        return <span style={{
          color: "#999"
        }}>No Manager</span>;
      }
    }];
    const filter: WhereClause<Employee, RDPs> = {
      managerName: {
        $in: [TARGET_DATA, "Fatima Zhang"]
      }
    };
    return <div className="object-table-container" style={{
      height: "600px"
    }}>
        <ObjectTable objectType={Employee} columnDefinitions={columnDefinitions} defaultOrderBy={[{
        property: "managerName",
        direction: "asc"
      }]} filter={filter} />
      </div>;
  },
  // The derived "Manager" column is sortable through the header menu, and
  // \`defaultOrderBy\` seeds it ascending.
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Header for the RDP column renders once the filtered rows load.
    await canvas.findByText("Manager");
    await waitFor(() => expect(canvas.getAllByRole("row").length).toBeGreaterThan(1));

    // defaultOrderBy seeds an ascending sort on the derived managerName column.
    await getColumnHeader(canvas, "managerName");
    await waitFor(() => expect(sortDirectionOf(canvas, "managerName")).toBe("asc"));

    // Sorting an RDP column flips direction through the same header menu.
    await openHeaderMenu(canvas, "managerName");
    await clickHeaderMenuItem("Sort descending");
    await waitFor(() => expect(sortDirectionOf(canvas, "managerName")).toBe("desc"));

    // Restore the seeded ascending sort so the story ends as it started.
    await openHeaderMenu(canvas, "managerName");
    await clickHeaderMenuItem("Sort ascending");
    await waitFor(() => expect(sortDirectionOf(canvas, "managerName")).toBe("asc"));
  },
  parameters: {
    docs: {
      description: {
        story: "Combines derived property columns with \`defaultOrderBy\` and \`filter\`. " + "Demonstrates sorting by an RDP (managerName) and filtering the derived property."
      },
      source: {
        code: \`type RDPs = { managerName: "string" };

const columnDefinitions: ColumnDefinition<Employee, RDPs>[] = [
  { locator: { type: "property", id: "fullName" } },
  { locator: { type: "property", id: "department" } },
  {
    locator: {
      type: "rdp",
      id: "managerName",
      creator: (baseObjectSet) =>
        baseObjectSet.pivotTo("lead").selectProperty("fullName"),
    },
    renderHeader: () => "Manager",
    renderCell: (object) => {
      if ("managerName" in object) {
        return <span>{object["managerName"]}</span>;
      }
      return <span style={{ color: "#999" }}>No Manager</span>;
    },
  },
];

const filter: WhereClause<Employee, RDPs> = {
  managerName: { $in: [TARGET_DATA, "Fatima Zhang"] },
};

<ObjectTable
  objectType={Employee}
  columnDefinitions={columnDefinitions}
  defaultOrderBy={[{ property: "managerName", direction: "asc" }]}
  filter={filter}
/>\`
      }
    }
  }
}`,...(N=(j=p.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};var x,E,S;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: [{
      locator: {
        type: "property",
        id: "fullName"
      }
    }, {
      locator: {
        type: "property",
        id: "department"
      }
    }, {
      locator: {
        type: "function",
        id: "seniority",
        queryDefinition: getEmployeeSeniority,
        getFunctionParams: (objectSet: ObjectSet<Employee>) => ({
          employees: objectSet
        }) as never,
        getKey: (object: Osdk.Instance<Employee>) => String(object.$primaryKey),
        getValue: (cellData?: unknown) => cellData
      },
      renderHeader: () => "Seniority",
      width: 120
    }] as ColumnDefinition<Employee>[]
  },
  parameters: {
    docs: {
      description: {
        story: "Use function-backed columns to display computed values from a Foundry query. " + "The 'Seniority' column calls \`getEmployeeSeniority\` with the current object set " + "and maps each result back to the corresponding row."
      },
      source: {
        code: \`import { getEmployeeSeniority } from "./ontology/queries";

type SeniorityFunctions = { seniority: typeof getEmployeeSeniority };

const columnDefinitions: ColumnDefinition<Employee, {}, SeniorityFunctions>[] = [
  { locator: { type: "property", id: "fullName" } },
  { locator: { type: "property", id: "department" } },
  {
    locator: {
      type: "function",
      id: "seniority",
      queryDefinition: getEmployeeSeniority,
      getFunctionParams: (objectSet) => ({ employees: objectSet }),
      getKey: (object) => String(object.$primaryKey),
      getValue: (cellData) => cellData,
    },
    renderHeader: () => "Seniority",
    width: 120,
  },
];

<ObjectTable objectType={Employee} columnDefinitions={columnDefinitions} />\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable {...args} />
    </div>,
  // The "Seniority" function column resolves server-computed values (the mocked
  // query returns Senior/Mid/Junior/Unknown) and maps them back to each row.
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await canvas.findByText("Seniority");

    // At least one row should resolve a computed seniority value.
    await waitFor(() => expect(canvas.getAllByText(/^(Senior|Mid|Junior|Unknown)$/u).length).toBeGreaterThan(0));
  }
}`,...(S=(E=m.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};var C,A,H;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`const customColumnDefinition = [
      ...columnDefinitions,
      {
        locator: {
          type: "custom",
          id: "actions",
        },
        renderHeader: () => "Actions",
        renderCell: (object: any) => {
          return (
            <div style={{ display: "flex", gap: "8px" }}>
              <button
                onClick={() => {}}
              >
                View
              </button>
              <button
                onClick={() => {}}
              >
                Edit
              </button>
            </div>
          );
        },
        orderable: false,
        width: 120,
      },
    ]
    
    return  <ObjectTable objectType={Employee} columnDefinitions={customColumnDefinition} />
    \`
      }
    }
  },
  args: {
    objectType: Employee,
    columnDefinitions: [...(columnDefinitions.slice(0, 3) as ColumnDefinition<Employee>[]), {
      locator: {
        type: "custom",
        id: "actions"
      },
      renderHeader: () => "Actions",
      renderCell: (object: any) => {
        return <div style={{
          display: "flex",
          gap: "8px"
        }}>
              <button style={{
            padding: "4px 8px",
            fontSize: "12px",
            border: "1px solid #d1d5db",
            borderRadius: "4px",
            background: "white",
            cursor: "pointer"
          }} onClick={() => alert(\`View \${object.fullName}\`)}>
                View
              </button>
              <button style={{
            padding: "4px 8px",
            fontSize: "12px",
            border: "1px solid #d1d5db",
            borderRadius: "4px",
            background: "white",
            cursor: "pointer"
          }} onClick={() => alert(\`Edit \${object.fullName}\`)}>
                Edit
              </button>
            </div>;
      },
      orderable: false,
      width: 120
    }]
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable {...args} />
    </div>,
  // The custom "Actions" column renders View/Edit buttons in every row.
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Wait for rows (and their action buttons) to render.
    await expect((await canvas.findAllByRole("button", {
      name: "View"
    })).length).toBeGreaterThan(0);
    await expect(canvas.getByText("Actions")).toBeInTheDocument();
    await expect(canvas.getAllByRole("button", {
      name: "Edit"
    }).length).toBeGreaterThan(0);
  }
}`,...(H=(A=d.parameters)==null?void 0:A.docs)==null?void 0:H.source}}};var B,k,O;y.parameters={...y.parameters,docs:{...(B=y.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: [{
      locator: {
        type: "property",
        id: "fullName"
      },
      renderHeader: () => <a href="#" className="header-link" onClick={e => {
        e.preventDefault();
        alert("Employee Name column clicked!");
      }}>
            Employee Name
          </a>
    }, {
      locator: {
        type: "property",
        id: "emailPrimaryWork"
      }
    }, {
      locator: {
        type: "property",
        id: "jobTitle"
      },
      renderHeader: () => "Job Title"
    }, {
      locator: {
        type: "custom",
        id: "employment-status"
      },
      renderHeader: () => "Employment Status",
      renderCell: (employee: any) => {
        const startDate = employee.firstFullTimeStartDate;
        const isActive = startDate && new Date(startDate) <= new Date();
        return <span className={\`status-tag \${isActive ? "active" : "inactive"}\`}>
              {isActive ? "Active" : "Inactive"}
            </span>;
      },
      width: 140
    }, {
      locator: {
        type: "property",
        id: "department"
      }
    }]
  },
  parameters: {
    docs: {
      source: {
        code: \`const columnDefinitions = [
  {
    locator: { type: "property", id: "fullName" },
    renderHeader: () => (
      <a
        href="#"
        className="header-link"
        onClick={(e) => {
          e.preventDefault();
          alert("Employee Name column clicked!");
        }}
      >
        Employee Name
      </a>
    ),
  },
  {
    locator: { type: "property", id: "emailPrimaryWork" },
  },
  {
    locator: { type: "property", id: "jobTitle" },
    renderHeader: () => "Job Title",
  },
  {
    locator: {
      type: "custom",
      id: "employment-status",
    },
    renderHeader: () => "Employment Status",
    renderCell: (employee) => {
      const startDate = employee["firstFullTimeStartDate"];
      const isActive = startDate && new Date(startDate) <= new Date();

      return (
        <span className={\\\`status-tag \\\${isActive ? "active" : "inactive"}\\\`}>
          {isActive ? "Active" : "Inactive"}
        </span>
      );
    },
    width: 140,
  },
  {
    locator: { type: "property", id: "department" },
  },
];

<ObjectTable objectType={Employee} columnDefinitions={columnDefinitions} />\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable {...args} />
    </div>,
  // Custom \`renderHeader\` produces a link header, and a custom \`renderCell\`
  // produces Active/Inactive status tags. (The header link calls window.alert
  // on click, which would block the test runner, so we only assert it renders.)
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await canvas.findByText(TARGET_DATA);
    await expect(canvas.getByRole("link", {
      name: "Employee Name"
    })).toBeInTheDocument();
    await expect(canvas.getByText("Employment Status")).toBeInTheDocument();
    await expect(canvas.getAllByText(/^(Active|Inactive)$/u).length).toBeGreaterThan(0);
  }
}`,...(O=(k=y.parameters)==null?void 0:k.docs)==null?void 0:O.source}}};const Fe=["WithDefaultColumnPinning","WithDerivedPropertyOrderingAndFilter","WithFunctionColumn","WithCustomColumn","WithCustomRenderers"];export{d as WithCustomColumn,y as WithCustomRenderers,s as WithDefaultColumnPinning,p as WithDerivedPropertyOrderingAndFilter,m as WithFunctionColumn,Fe as __namedExportsOrder,Re as default};
