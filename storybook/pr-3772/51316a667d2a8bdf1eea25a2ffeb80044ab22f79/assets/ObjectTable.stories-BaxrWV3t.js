import{j as i}from"./iframe-CdV0oMQK.js";import{O as p}from"./object-table-PUOn78Wk.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-SuGUxsiz.js";import"./preload-helper-DYnb1G2Z.js";import"./Table-PzGbpO_j.js";import"./index-CDOi726F.js";import"./Dialog-B0ebku9n.js";import"./cross-DjfMhKqA.js";import"./svgIconContainer-Db8D1oyf.js";import"./useBaseUiId-qoWBNaJE.js";import"./InternalBackdrop-BqcAGkPw.js";import"./composite-B01ubv1I.js";import"./index-DgVn8Y3N.js";import"./index-CtEXs2m1.js";import"./index-C40UMVEa.js";import"./useEventCallback-BZlczu6G.js";import"./SkeletonBar-CtDTL4xI.js";import"./LoadingCell-BXPO2_aI.js";import"./ColumnConfigDialog-LtsebjWK.js";import"./DraggableList-Cc6rUBn4.js";import"./search-KAXH_KdC.js";import"./Input-DcsAtJ_5.js";import"./useControlled-DmnLTdeY.js";import"./Button-PcrXfoGH.js";import"./small-cross-CO2wkq1Q.js";import"./ActionButton-B47enmWM.js";import"./Checkbox-xu6FUSrv.js";import"./useValueChanged-4-cIywSW.js";import"./CollapsiblePanel-BGdu-4zm.js";import"./MultiColumnSortDialog-CIn4vagO.js";import"./MenuTrigger-BymRryZB.js";import"./CompositeItem-BGsDUgBO.js";import"./ToolbarRootContext-sN3AAwIa.js";import"./getDisabledMountTransitionStyles-iAxy3nU0.js";import"./getPseudoElementBounds-DCYHN6OR.js";import"./chevron-down-CAimFdfR.js";import"./index-C2SvAwVc.js";import"./error-DatCfw_J.js";import"./BaseCbacBanner-CKCWA2nS.js";import"./makeExternalStore-Ble7iOu_.js";import"./Tooltip-CRHEL8Uo.js";import"./PopoverPopup-oZ9Rd77s.js";import"./debounce-C-fCXie1.js";import"./useOsdkClient-CxdzKQBX.js";import"./tick-Bi7vgB1Y.js";import"./DropdownField-DtCtfIum.js";import"./isEqual-C01czanu.js";import"./withOsdkMetrics-tj5br0ur.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
