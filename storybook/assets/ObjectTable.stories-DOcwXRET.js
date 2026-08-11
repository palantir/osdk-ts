import{j as i}from"./iframe-Cg6ASuCP.js";import{O as p}from"./object-table-Bjcz7bbV.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BUCGvlFA.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-DfTsClZx.js";import"./index-V7Glt-8h.js";import"./Dialog-mMmJOESS.js";import"./cross-SbgvyX3H.js";import"./svgIconContainer-DcmQCQdV.js";import"./useBaseUiId-B89yFkvR.js";import"./InternalBackdrop-mi8ZWe1N.js";import"./composite-bA2XaVwF.js";import"./index-B5FPzhRE.js";import"./index-BIztXxky.js";import"./index-CkTqgvGy.js";import"./useEventCallback-BucIXtc8.js";import"./SkeletonBar-CK58xaGD.js";import"./LoadingCell-CRmF0eo7.js";import"./ColumnConfigDialog-Cq6rALBK.js";import"./DraggableList-B-rXfia1.js";import"./search-WAfjvqtM.js";import"./Input-CWI7iTNo.js";import"./useControlled-CnGpIwtD.js";import"./isEqual-CXkZB2pT.js";import"./isObject-B2DRC6w3.js";import"./Button-KGRl-1x_.js";import"./ActionButton-CGl6msdG.js";import"./Checkbox-IOTuwp8F.js";import"./useValueChanged-2Khr2vsL.js";import"./CollapsiblePanel-Cza2zXbU.js";import"./MultiColumnSortDialog-CiuR-z3s.js";import"./MenuTrigger-BfUVXqr2.js";import"./CompositeItem-UIqmeTDm.js";import"./ToolbarRootContext-CkyWDlNb.js";import"./getDisabledMountTransitionStyles-CpoZCCtH.js";import"./getPseudoElementBounds-BUFIRwYb.js";import"./chevron-down-CS-4kcLV.js";import"./index-BifWs9Kg.js";import"./error-C4_u6BdE.js";import"./BaseCbacBanner-COg9wZkT.js";import"./makeExternalStore-CqKKW2oa.js";import"./Tooltip-Ch0Baty8.js";import"./PopoverPopup-CBNXtRDD.js";import"./toNumber-BPwhhvms.js";import"./useOsdkClient-fJTfa-DY.js";import"./tick-Bi_LeeaD.js";import"./DropdownField-ky6IQ2yo.js";import"./withOsdkMetrics-B9NdYHre.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
