import{j as i}from"./iframe-CVr9LoxM.js";import{O as p}from"./object-table-BAwa8E0X.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-C6AtsFx2.js";import"./preload-helper-B3cY2-AW.js";import"./Table-IkqPuQ6B.js";import"./index-Df4Vb_Rg.js";import"./Dialog-Bvfn0Z3y.js";import"./cross-CBN4pK4_.js";import"./svgIconContainer-BVc8zREf.js";import"./useBaseUiId-BgjPqsl9.js";import"./InternalBackdrop-B9YxhYvi.js";import"./composite-CWgHrWA4.js";import"./index-F2yAeMdf.js";import"./index-HRRYB8HE.js";import"./index-DjjNgAfl.js";import"./useEventCallback-B-NY5P9l.js";import"./SkeletonBar-NYup2M2c.js";import"./LoadingCell-DTpfEbFX.js";import"./ColumnConfigDialog-CM1tbYEm.js";import"./DraggableList-CWLH3RMw.js";import"./search-Brj5g3oE.js";import"./Input-BcPZGFIr.js";import"./useControlled-smGAEf-G.js";import"./Button-vPPL3ll8.js";import"./small-cross-DABERClE.js";import"./ActionButton-D0hhWxeW.js";import"./Checkbox-DDyQcp9_.js";import"./useValueChanged-DNfH4ZzU.js";import"./CollapsiblePanel-C0K5tgYw.js";import"./MultiColumnSortDialog-npyZMECM.js";import"./MenuTrigger-5w2KnMTa.js";import"./CompositeItem-B09-p_Fm.js";import"./ToolbarRootContext-CLf2yNEL.js";import"./getDisabledMountTransitionStyles-DmWpyYJT.js";import"./getPseudoElementBounds-CCTtg9pk.js";import"./chevron-down-B0k-btX-.js";import"./index-Clqhcc_a.js";import"./error-BXLmWA6n.js";import"./BaseCbacBanner-C5szwo-7.js";import"./makeExternalStore--O5_5o65.js";import"./Tooltip-BiirjfzW.js";import"./PopoverPopup-DM6VnfOU.js";import"./debounce-BAwOJApV.js";import"./useOsdkClient-DdROgngo.js";import"./tick-Bnn8MQdF.js";import"./DropdownField-CgCH9W6l.js";import"./isEqual-D8JbxFr7.js";import"./withOsdkMetrics-DBLS2NQA.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
