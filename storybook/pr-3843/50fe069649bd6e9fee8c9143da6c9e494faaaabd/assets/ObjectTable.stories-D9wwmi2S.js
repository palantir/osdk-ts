import{j as i}from"./iframe-0M63JHCf.js";import{O as p}from"./object-table-2mMzzfs7.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CtEjTtRo.js";import"./preload-helper-yRY4DJID.js";import"./Table-C4CARdpZ.js";import"./index-DCLstkM0.js";import"./Dialog-DhVwm5-L.js";import"./cross-Dx7TBNdy.js";import"./svgIconContainer-Ba-VjDLq.js";import"./useBaseUiId-C4hkh7ZQ.js";import"./InternalBackdrop-HX2Lu_fI.js";import"./composite-BGTmrBgq.js";import"./index-DfbbdQ9g.js";import"./index-BN_1v8m8.js";import"./index--Mgh_lWx.js";import"./useEventCallback-BFmOLSII.js";import"./SkeletonBar-DmlJks1A.js";import"./LoadingCell-ClHYUGsW.js";import"./ColumnConfigDialog-kgzLiGtM.js";import"./DraggableList-BiAe_XK2.js";import"./search-BHMf8zxq.js";import"./Input-BySgS7sE.js";import"./useControlled-Bfcb3jbt.js";import"./isEqual-CwyeCwkZ.js";import"./isObject-OMMx7eDJ.js";import"./Button-yHWtoMo0.js";import"./ActionButton-YGuniLSR.js";import"./Checkbox-B-PW90Rg.js";import"./useValueChanged-BToEeRdF.js";import"./CollapsiblePanel-BfU0Af3S.js";import"./MultiColumnSortDialog-2YO5ARfD.js";import"./MenuTrigger-BoIum8c4.js";import"./CompositeItem-DykB-jR3.js";import"./ToolbarRootContext-4caIMlji.js";import"./getDisabledMountTransitionStyles-BG8GaNm1.js";import"./getPseudoElementBounds-onK_gGUB.js";import"./chevron-down-CJX5oFSg.js";import"./index-BhO_dAvP.js";import"./error-DtkpoifS.js";import"./BaseCbacBanner-CiuaOWIH.js";import"./makeExternalStore-BOJmpgSR.js";import"./Tooltip-DTY2SBSt.js";import"./PopoverPopup-Bj_qNAcN.js";import"./toNumber-Dzlq76X1.js";import"./useOsdkClient-DV-CPQEw.js";import"./tick-Bibjqq1N.js";import"./DropdownField-BLsGqkq4.js";import"./withOsdkMetrics-DCNaRoie.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
