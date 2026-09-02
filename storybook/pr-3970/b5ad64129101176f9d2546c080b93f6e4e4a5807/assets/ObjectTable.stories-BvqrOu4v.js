import{j as i}from"./iframe-DFSfQ_aP.js";import{O as p}from"./object-table-Bo8foGJ9.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BN_PR6Dc.js";import"./preload-helper-DJLQJiWb.js";import"./Table-D8UroSLJ.js";import"./index-CHPYvPwX.js";import"./Dialog-BYw4_dN0.js";import"./cross-Ce3cqE51.js";import"./svgIconContainer-BpYc0jTS.js";import"./useBaseUiId-DCyghABl.js";import"./InternalBackdrop-C3LI9WHn.js";import"./composite-BX_h9XZf.js";import"./index-CQjeWbkR.js";import"./index-ASrgrlRW.js";import"./index-BomX2u3n.js";import"./useEventCallback-CWkq5eG5.js";import"./SkeletonBar-BXnis-nv.js";import"./LoadingCell-BDGcPLQM.js";import"./ColumnConfigDialog-BIU_6Fcg.js";import"./DraggableList-B3yfqHzs.js";import"./search-HIhGbyYm.js";import"./Input-B4nqbncu.js";import"./useControlled-DXWD0Znz.js";import"./Button-BpGPHejG.js";import"./small-cross-Ck6yssSu.js";import"./ActionButton-DNBUhcHU.js";import"./Checkbox-DoeqS_HZ.js";import"./useValueChanged-DcWoVdTs.js";import"./CollapsiblePanel-BsoK_9-k.js";import"./MultiColumnSortDialog-CxraL-OH.js";import"./MenuTrigger-YFJwhJiB.js";import"./CompositeItem-CyzwHVke.js";import"./ToolbarRootContext-BpJBwGb-.js";import"./getDisabledMountTransitionStyles-vXpnLO87.js";import"./getPseudoElementBounds-Bka1lmS1.js";import"./chevron-down-D8HcwDY0.js";import"./index-CdSacirl.js";import"./error-D7U43ngn.js";import"./BaseCbacBanner-DCmYrZdG.js";import"./makeExternalStore-DeP1q7OZ.js";import"./Tooltip-CNCLPMyb.js";import"./PopoverPopup-246_BZ4N.js";import"./debounce-C679H-9B.js";import"./useOsdkClient-Cq2Nb_5Z.js";import"./tick-B1n0K6Q7.js";import"./DropdownField-DcUwV0uD.js";import"./isEqual-ZOtwe112.js";import"./withOsdkMetrics-CFtGdwbh.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
