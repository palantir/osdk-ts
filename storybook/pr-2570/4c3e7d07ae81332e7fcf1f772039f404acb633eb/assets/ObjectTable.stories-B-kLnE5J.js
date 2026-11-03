import{j as i}from"./iframe-DdFNuve9.js";import{O as p}from"./object-table-DQTsbNm4.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-NCnoJtUg.js";import"./preload-helper-BF0zHEQ9.js";import"./Table-B_ldMpC3.js";import"./index-COFBYoj0.js";import"./Dialog-CZKykb2z.js";import"./cross-B7UPksVb.js";import"./svgIconContainer-BqEjzz1q.js";import"./useBaseUiId-DrBZRYC3.js";import"./InternalBackdrop-B8Hewn_Z.js";import"./composite-C6KVf4LM.js";import"./index-CoKG21UB.js";import"./index-LHJitHOy.js";import"./index-D1P0vuc0.js";import"./useEventCallback-DY4RU0bI.js";import"./SkeletonBar-jb0OzX38.js";import"./LoadingCell-Bs4kfMYn.js";import"./ColumnConfigDialog-B8X5q4A3.js";import"./DraggableList-5BhBxM5G.js";import"./search-CL3Pgcnj.js";import"./Input-CnU8KDdl.js";import"./useControlled-S1lUya7y.js";import"./Button-iraM8Bjb.js";import"./small-cross-CdiQ7hdd.js";import"./ActionButton-BvxY4KIJ.js";import"./Checkbox-D2Qv3ic4.js";import"./useValueChanged-CEIVp2aj.js";import"./CollapsiblePanel-CjIgVUOq.js";import"./MultiColumnSortDialog-Ddd38VEM.js";import"./MenuTrigger-Bc8702_S.js";import"./CompositeItem-D3i9R6e9.js";import"./ToolbarRootContext-lq7yZP_w.js";import"./getDisabledMountTransitionStyles-B_So2Fld.js";import"./getPseudoElementBounds-DJL0g8Q1.js";import"./chevron-down-BQgLyWBH.js";import"./index-CWvJ-sqM.js";import"./error-BFEjzhDR.js";import"./BaseCbacBanner-BzE4b8i3.js";import"./makeExternalStore-C_cS4qu3.js";import"./Tooltip-DS6i2lfZ.js";import"./PopoverPopup-DSz7COAo.js";import"./debounce-D6YkW0bB.js";import"./useOsdkClient-DWubOs8f.js";import"./tick-DllXzrp2.js";import"./DropdownField-CAgPW_N_.js";import"./isEqual-CIzLxBkl.js";import"./withOsdkMetrics-DBiHNDc8.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
