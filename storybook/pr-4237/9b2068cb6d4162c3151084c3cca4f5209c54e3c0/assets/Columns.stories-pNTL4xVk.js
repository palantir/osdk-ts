import{j as a}from"./iframe-Cc5_drEC.js";import{O as i}from"./object-table-P_Tf1Dfl.js";import{E as l}from"./Employee-BAk2o20h.js";import{g as $,o as G,c as V,T as W,b as h,a as u,e as g,s as b}from"./objectTableStoryHelpers-Bd1-skWr.js";import"./preload-helper-Bt1W59RD.js";import"./Table-DeQbLK8q.js";import"./index-D-UZOeKX.js";import"./Dialog-C1aseqgF.js";import"./cross-CJA5t11o.js";import"./svgIconContainer-DUNbWJiK.js";import"./useBaseUiId-DZZTvEON.js";import"./InternalBackdrop-00ofXWi4.js";import"./composite-DTAuCieW.js";import"./index-IxLV6xZ7.js";import"./index-fYCa685o.js";import"./index-DLbXZ__j.js";import"./useEventCallback-Nwtw5ePR.js";import"./SkeletonBar-DdEJM8wE.js";import"./LoadingCell-C5h29HP8.js";import"./ColumnConfigDialog-TW1lwUkG.js";import"./DraggableList-BzFzeCoL.js";import"./search-C_Y495lk.js";import"./Input-BXNkfVg0.js";import"./useControlled-DzeayCVC.js";import"./Button-CLepS3ZY.js";import"./small-cross-ChmHXfGU.js";import"./ActionButton-w_opMWjJ.js";import"./Checkbox-DKu8ib_9.js";import"./useValueChanged-C8wUi11i.js";import"./CollapsiblePanel-CxbXkZUA.js";import"./MultiColumnSortDialog-CM1JEO4R.js";import"./MenuTrigger-BqkP-pKp.js";import"./CompositeItem-Zf76mXhE.js";import"./ToolbarRootContext-B17vRDJw.js";import"./getDisabledMountTransitionStyles-CWBpGJQ9.js";import"./getPseudoElementBounds-BgIULFkV.js";import"./chevron-down-DaAY8kxc.js";import"./index-DpTIc79B.js";import"./error-CgtKdKTE.js";import"./BaseCbacBanner-CtMCVqmc.js";import"./makeExternalStore-8Ml87JDf.js";import"./Tooltip-DLAYmbQY.js";import"./PopoverPopup-NaPF7hSd.js";import"./debounce-DfK46y7C.js";import"./useOsdkClient-C_6tjczz.js";import"./tick-CMjsKL7k.js";import"./DropdownField-DP_8eQpa.js";import"./isEqual-DuFq13IR.js";import"./withOsdkMetrics-uMhaipzm.js";const{expect:t,fn:_,waitFor:o,within:c}=__STORYBOOK_MODULE_TEST__,Ie={...G,title:"Components/ObjectTable/Features/Columns"},s={args:{objectType:l,columnDefinitions:[{locator:{type:"property",id:"fullName"},pinned:"left"},{locator:{type:"property",id:"emailPrimaryWork"}},{locator:{type:"property",id:"jobTitle"}},{locator:{type:"property",id:"department"},pinned:"right"},{locator:{type:"property",id:"firstFullTimeStartDate"}}],onColumnsPinnedChanged:_()},parameters:{docs:{source:{code:`const columnDefinitions = [
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
/>`}}},render:e=>a.jsx("div",{className:"object-table-container",style:{height:"600px"},children:a.jsx(i,{...e})}),play:async({canvasElement:e,args:n})=>{const r=c(e),f=await h(r,"fullName"),I=await h(r,"department");await t(f).toHaveAttribute("data-pinned","left"),await t(I).toHaveAttribute("data-pinned","right"),await u(r,"fullName"),await g("Unpin Column"),await o(()=>t(f).toHaveAttribute("data-pinned","false")),await t(n.onColumnsPinnedChanged).toHaveBeenCalled(),await u(r,"fullName"),await g("Pin column"),await o(()=>t(f).toHaveAttribute("data-pinned","left"));const w=await o(()=>{const T=e.querySelector('[data-row-parity] [data-pinned="left"]');if(T==null)throw new Error("no left-pinned body cell rendered");return T}),v=w.closest("[data-row-parity]");if(v==null)throw new Error("pinned cell is not inside a row");const D=getComputedStyle(w).backgroundColor;await t(D).not.toBe("rgba(0, 0, 0, 0)"),await t(D).toBe(getComputedStyle(v).backgroundColor)}},p={render:()=>{const e=[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"rdp",id:"managerName",creator:r=>r.pivotTo("lead").selectProperty("fullName")},renderHeader:()=>"Manager",renderCell:r=>"managerName"in r?a.jsx("span",{children:r.managerName}):a.jsx("span",{style:{color:"#999"},children:"No Manager"})}],n={managerName:{$in:[W,"Fatima Zhang"]}};return a.jsx("div",{className:"object-table-container",style:{height:"600px"},children:a.jsx(i,{objectType:l,columnDefinitions:e,defaultOrderBy:[{property:"managerName",direction:"asc"}],filter:n})})},play:async({canvasElement:e})=>{const n=c(e);await n.findByText("Manager"),await o(()=>t(n.getAllByRole("row").length).toBeGreaterThan(1)),await h(n,"managerName"),await o(()=>t(b(n,"managerName")).toBe("asc")),await u(n,"managerName"),await g("Sort descending"),await o(()=>t(b(n,"managerName")).toBe("desc")),await u(n,"managerName"),await g("Sort ascending"),await o(()=>t(b(n,"managerName")).toBe("asc"))},parameters:{docs:{description:{story:"Combines derived property columns with `defaultOrderBy` and `filter`. Demonstrates sorting by an RDP (managerName) and filtering the derived property."},source:{code:`type RDPs = { managerName: "string" };

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
/>`}}}},d={args:{objectType:l,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"function",id:"seniority",queryDefinition:$,getFunctionParams:e=>({employees:e}),getKey:e=>String(e.$primaryKey),getValue:e=>e},renderHeader:()=>"Seniority",width:120}]},parameters:{docs:{description:{story:"Use function-backed columns to display computed values from a Foundry query. The 'Seniority' column calls `getEmployeeSeniority` with the current object set and maps each result back to the corresponding row."},source:{code:`import { getEmployeeSeniority } from "./ontology/queries";

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

<ObjectTable objectType={Employee} columnDefinitions={columnDefinitions} />`}}},render:e=>a.jsx("div",{className:"object-table-container",style:{height:"600px"},children:a.jsx(i,{...e})}),play:async({canvasElement:e})=>{const n=c(e);await n.findByText("Seniority"),await o(()=>t(n.getAllByText(/^(Senior|Mid|Junior|Unknown)$/u).length).toBeGreaterThan(0))}},m={parameters:{docs:{source:{code:`const customColumnDefinition = [
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
    `}}},args:{objectType:l,columnDefinitions:[...V.slice(0,3),{locator:{type:"custom",id:"actions"},renderHeader:()=>"Actions",renderCell:e=>a.jsxs("div",{style:{display:"flex",gap:"8px"},children:[a.jsx("button",{style:{padding:"4px 8px",fontSize:"12px",border:"1px solid #d1d5db",borderRadius:"4px",background:"white",cursor:"pointer"},onClick:()=>alert(`View ${e.fullName}`),children:"View"}),a.jsx("button",{style:{padding:"4px 8px",fontSize:"12px",border:"1px solid #d1d5db",borderRadius:"4px",background:"white",cursor:"pointer"},onClick:()=>alert(`Edit ${e.fullName}`),children:"Edit"})]}),orderable:!1,width:120}]},render:e=>a.jsx("div",{className:"object-table-container",style:{height:"600px"},children:a.jsx(i,{...e})}),play:async({canvasElement:e})=>{const n=c(e);await t((await n.findAllByRole("button",{name:"View"})).length).toBeGreaterThan(0),await t(n.getByText("Actions")).toBeInTheDocument(),await t(n.getAllByRole("button",{name:"Edit"}).length).toBeGreaterThan(0)}},y={args:{objectType:l,columnDefinitions:[{locator:{type:"property",id:"fullName"},renderHeader:()=>a.jsx("a",{href:"#",className:"header-link",onClick:e=>{e.preventDefault(),alert("Employee Name column clicked!")},children:"Employee Name"})},{locator:{type:"property",id:"emailPrimaryWork"}},{locator:{type:"property",id:"jobTitle"},renderHeader:()=>"Job Title"},{locator:{type:"custom",id:"employment-status"},renderHeader:()=>"Employment Status",renderCell:e=>{const n=e.firstFullTimeStartDate,r=n&&new Date(n)<=new Date;return a.jsx("span",{className:`status-tag ${r?"active":"inactive"}`,children:r?"Active":"Inactive"})},width:140},{locator:{type:"property",id:"department"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

<ObjectTable objectType={Employee} columnDefinitions={columnDefinitions} />`}}},render:e=>a.jsx("div",{className:"object-table-container",style:{height:"600px"},children:a.jsx(i,{...e})}),play:async({canvasElement:e})=>{const n=c(e);await n.findByText(W),await t(n.getByRole("link",{name:"Employee Name"})).toBeInTheDocument(),await t(n.getByText("Employment Status")).toBeInTheDocument(),await t(n.getAllByText(/^(Active|Inactive)$/u).length).toBeGreaterThan(0)}};var j,N,x;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
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

    // Assert that pinned cells have an opaque background
    // and matches its row background color.
    const pinnedCell = await waitFor(() => {
      const cell = canvasElement.querySelector<HTMLElement>('[data-row-parity] [data-pinned="left"]');
      if (cell == null) {
        throw new Error("no left-pinned body cell rendered");
      }
      return cell;
    });
    const pinnedRow = pinnedCell.closest<HTMLElement>("[data-row-parity]");
    if (pinnedRow == null) {
      throw new Error("pinned cell is not inside a row");
    }
    const pinnedCellBg = getComputedStyle(pinnedCell).backgroundColor;
    await expect(pinnedCellBg).not.toBe("rgba(0, 0, 0, 0)");
    await expect(pinnedCellBg).toBe(getComputedStyle(pinnedRow).backgroundColor);
  }
}`,...(x=(N=s.parameters)==null?void 0:N.docs)==null?void 0:x.source}}};var E,C,S;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(S=(C=p.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var B,k,A;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(A=(k=d.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};var H,O,P;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(P=(O=m.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var R,F,M;y.parameters={...y.parameters,docs:{...(R=y.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(M=(F=y.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};const $e=["WithDefaultColumnPinning","WithDerivedPropertyOrderingAndFilter","WithFunctionColumn","WithCustomColumn","WithCustomRenderers"];export{m as WithCustomColumn,y as WithCustomRenderers,s as WithDefaultColumnPinning,p as WithDerivedPropertyOrderingAndFilter,d as WithFunctionColumn,$e as __namedExportsOrder,Ie as default};
