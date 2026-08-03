import{j as i}from"./iframe-Bzybdyuo.js";import{O as p}from"./object-table-Ci06Cb6a.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Csma6mAp.js";import"./preload-helper-DvhPMCjI.js";import"./Table-s-LOx-O1.js";import"./index-C7I7uOuD.js";import"./Dialog-DKwwdXiW.js";import"./cross-CE07U7-n.js";import"./svgIconContainer-CT7GuDuE.js";import"./useBaseUiId-LiIOLQsT.js";import"./InternalBackdrop-BteoWMrF.js";import"./composite-BlLYhcU2.js";import"./index-gwzeuytQ.js";import"./index-DyzMZFsL.js";import"./index-Cj0RLd6Y.js";import"./useEventCallback-BIS3lrlS.js";import"./SkeletonBar-M1Ic1N8F.js";import"./LoadingCell-DlD1fvlw.js";import"./ColumnConfigDialog-DHll2Vtm.js";import"./DraggableList-CKJ156pY.js";import"./search-DvoFgpQI.js";import"./Input-CdTlwUNA.js";import"./useControlled-Dmv8kSAc.js";import"./isEqual-a7a6QpMS.js";import"./isObject-CbXsQEYM.js";import"./Button-BVoTv4hE.js";import"./ActionButton-HSnORvpF.js";import"./Checkbox-CrI4yRfS.js";import"./useValueChanged-BeDSHPhg.js";import"./CollapsiblePanel-DIZt_nYD.js";import"./MultiColumnSortDialog-B1OBUidD.js";import"./MenuTrigger-CH3kZWz7.js";import"./CompositeItem-Dmbp9j_U.js";import"./ToolbarRootContext-DTWuY11i.js";import"./getDisabledMountTransitionStyles-gWcg8BNd.js";import"./getPseudoElementBounds-DntOXEgl.js";import"./chevron-down-ChW0ZqRN.js";import"./index-B9kV5q7Y.js";import"./error-DxO-v6dh.js";import"./BaseCbacBanner-ywq-HhKA.js";import"./makeExternalStore-DPGXEAtz.js";import"./Tooltip-BVN02VII.js";import"./PopoverPopup-3wn-Yyju.js";import"./toNumber-UpjdYfXI.js";import"./useOsdkClient-CgU6C7-g.js";import"./tick-BmQSr-db.js";import"./DropdownField-BcLVRQWa.js";import"./withOsdkMetrics-BQraTyAY.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
