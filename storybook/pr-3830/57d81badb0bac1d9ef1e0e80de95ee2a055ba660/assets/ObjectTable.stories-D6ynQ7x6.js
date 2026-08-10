import{j as i}from"./iframe-dUh8zyts.js";import{O as p}from"./object-table-h6uZIDX8.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-ClSU4uFi.js";import"./preload-helper-BXymFDmG.js";import"./Table-DeI48HrA.js";import"./index-CJwC7SLj.js";import"./Dialog-BAqQTIU0.js";import"./cross-v5mQEa5y.js";import"./svgIconContainer-DPzpipae.js";import"./useBaseUiId-DxJUnLpO.js";import"./InternalBackdrop-CWW-WkKK.js";import"./composite-DxnDX5iy.js";import"./index-KzBmUVTE.js";import"./index-JHVUTeks.js";import"./index-CQjzSTkR.js";import"./useEventCallback-DyVi0gM7.js";import"./SkeletonBar-B4d9mbjS.js";import"./LoadingCell-CYWP9Nnk.js";import"./ColumnConfigDialog-CTYZhuGD.js";import"./DraggableList-BBdgSxBn.js";import"./search-CWKr1ylo.js";import"./Input-DaNsYN7f.js";import"./useControlled-Buwyj981.js";import"./isEqual-CpoLP9vt.js";import"./isObject-CVlNV3JH.js";import"./Button-1AIBoBve.js";import"./ActionButton-HZveGBx3.js";import"./Checkbox-DAXF_oU2.js";import"./useValueChanged-C9SsLJ2V.js";import"./CollapsiblePanel-uTsFkh66.js";import"./MultiColumnSortDialog-oTUQOLnP.js";import"./MenuTrigger-Cq3Awx9E.js";import"./CompositeItem-BT68WWE1.js";import"./ToolbarRootContext-DkfpkdTH.js";import"./getDisabledMountTransitionStyles-xVfndiNH.js";import"./getPseudoElementBounds-BhdrgAhY.js";import"./chevron-down-B7jyoN5P.js";import"./index-JxUIMAws.js";import"./error-CfTpnqLQ.js";import"./BaseCbacBanner-z8y6g9KL.js";import"./makeExternalStore-D8wmXuZm.js";import"./Tooltip-BtZMYdIX.js";import"./PopoverPopup-C74uJ0i4.js";import"./toNumber-BcZWTPFC.js";import"./useOsdkClient-wiEyyrMf.js";import"./tick-CBTFlChJ.js";import"./DropdownField-BQlVEKwT.js";import"./withOsdkMetrics-B-vQVve6.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
