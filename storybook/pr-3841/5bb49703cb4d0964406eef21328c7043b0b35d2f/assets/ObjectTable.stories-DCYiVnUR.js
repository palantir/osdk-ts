import{j as i}from"./iframe-RU8IGrNT.js";import{O as p}from"./object-table-CWGy5XV-.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-gGBUETK2.js";import"./preload-helper-CC2SHOu0.js";import"./Table-DjvSUn86.js";import"./index-D0VksrnV.js";import"./Dialog-AsoczJSc.js";import"./cross-4-OM6Ghb.js";import"./svgIconContainer-CAf1V-Tr.js";import"./useBaseUiId-B7sFi6pv.js";import"./InternalBackdrop-BmKA3i1c.js";import"./composite-qIXSIzDA.js";import"./index-DDfKVfwf.js";import"./index-WBmL8T14.js";import"./index-BH9gOnci.js";import"./useEventCallback-DsQ6v7L7.js";import"./SkeletonBar-CjsJgAUH.js";import"./LoadingCell-CMdpQSwS.js";import"./ColumnConfigDialog-DgcQuFea.js";import"./DraggableList-7wIyKIwu.js";import"./search-C35W7rra.js";import"./Input-9-d8I3Qs.js";import"./useControlled-D60JD0mh.js";import"./Button-i-hZGgk2.js";import"./small-cross-DDP_QlWn.js";import"./ActionButton-B_UOz8mm.js";import"./Checkbox-C_eCVf5v.js";import"./useValueChanged-Dq_Pzrul.js";import"./CollapsiblePanel-gYEJ-yuU.js";import"./MultiColumnSortDialog-DnwMkIlB.js";import"./MenuTrigger-BwiNo1Qi.js";import"./CompositeItem-CC8f_DCj.js";import"./ToolbarRootContext-sPvQNWqX.js";import"./getDisabledMountTransitionStyles-KBK5f9_s.js";import"./getPseudoElementBounds-CS_FDytm.js";import"./chevron-down-D65XdSbD.js";import"./index-BALz8rwl.js";import"./error-DtrLgX5c.js";import"./BaseCbacBanner-BKrTPTyn.js";import"./makeExternalStore-m1NamX6V.js";import"./Tooltip-6itGbzak.js";import"./PopoverPopup-BUwRG3BX.js";import"./debounce-C6QpBJAl.js";import"./useOsdkClient-DTEwEYtW.js";import"./tick-D1RPONbV.js";import"./DropdownField-47olZyAw.js";import"./isEqual-hW0e3UsZ.js";import"./withOsdkMetrics-D0KBj7Xc.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns
  },
  parameters: {
    docs: {
      description: {
        story: "Minimal setup showing Employee data with default column definitions."
      },
      source: {
        code: \`<ObjectTable objectType={Employee} />\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable {...args} />
    </div>,
  // Loads data, then opens a column header menu to confirm the default,
  // out-of-the-box header features are all present.
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Wait for the (MSW-mocked) rows to load.
    await canvas.findByText(TARGET_DATA);
    await openHeaderMenu(canvas, "fullName");
    await expect(await screen.findByRole("menuitem", {
      name: "Sort ascending"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Sort descending"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Pin column"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Configure Columns"
    })).toBeInTheDocument();

    // Dismiss the menu so the story is left in a clean state.
    await userEvent.keyboard("{Escape}");
  }
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const de=["Default"];export{n as Default,de as __namedExportsOrder,ue as default};
