import{j as i}from"./iframe-BYO6buG4.js";import{O as p}from"./object-table-CMkQ3hCP.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DaylRghL.js";import"./preload-helper-BghxL7kB.js";import"./Table-DGj5Awqa.js";import"./index-BoyptyOK.js";import"./Dialog-BoT1wOeq.js";import"./cross-Db1-xEOp.js";import"./svgIconContainer-56E6UlaN.js";import"./useBaseUiId-DSjvVVjS.js";import"./InternalBackdrop-idagBMen.js";import"./composite-Od8Flb7p.js";import"./index-CsWBFdKT.js";import"./index-1LA5lE3C.js";import"./index-NS6h_AVZ.js";import"./useEventCallback-mMKXwGEF.js";import"./SkeletonBar-ClyXBwkY.js";import"./LoadingCell-CeWD4vTh.js";import"./ColumnConfigDialog-CWB1DEao.js";import"./DraggableList-D14Tn9Md.js";import"./search-Ci90mlVI.js";import"./Input-T9JgejYL.js";import"./useControlled-Cg_ccIWb.js";import"./Button-DMsIowuw.js";import"./small-cross-FoG8HaIL.js";import"./ActionButton-DqJ5wns_.js";import"./Checkbox-EASZO9QI.js";import"./useValueChanged-CrS2COC5.js";import"./CollapsiblePanel-BZo8Mo6J.js";import"./MultiColumnSortDialog-B7RWVW-u.js";import"./MenuTrigger-BInfiqJ9.js";import"./CompositeItem-CN9f57ba.js";import"./ToolbarRootContext-BKI2aJJ6.js";import"./getDisabledMountTransitionStyles-B-bqpDLb.js";import"./getPseudoElementBounds-BcYivqxs.js";import"./chevron-down-DqQBT-ce.js";import"./index-YNs_4vqy.js";import"./error-DvNb2Jgd.js";import"./BaseCbacBanner-YHQLwqPr.js";import"./makeExternalStore-Cjetkmua.js";import"./Tooltip-DipSBfOt.js";import"./PopoverPopup-DeSSS8K8.js";import"./debounce-BTsoIqCY.js";import"./useOsdkClient-DoQ52jay.js";import"./tick-BkEOGkDA.js";import"./DropdownField-CSPCixRr.js";import"./isEqual-DUs2sxEB.js";import"./withOsdkMetrics-DdFROTWY.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
