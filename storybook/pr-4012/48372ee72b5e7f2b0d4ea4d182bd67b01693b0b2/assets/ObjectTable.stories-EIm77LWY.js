import{j as i}from"./iframe-VN1YMwbH.js";import{O as p}from"./object-table-lZxpoCM_.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-COeFp_yh.js";import"./preload-helper-DgM3fVqV.js";import"./Table-BD5OenkE.js";import"./index-BQ-hfR18.js";import"./Dialog-C7a3ueT_.js";import"./cross-CRpIa4b8.js";import"./svgIconContainer-BXOSkGjh.js";import"./useBaseUiId-DJ36Kcth.js";import"./InternalBackdrop-BrgOtY4c.js";import"./composite-DEJ-tsuW.js";import"./index-C-8kYW2Y.js";import"./index-CJqO1XSq.js";import"./index-BKRJqYvH.js";import"./useEventCallback-nXdgyEdi.js";import"./SkeletonBar-BGXPo9d8.js";import"./LoadingCell-DHyEQ1wW.js";import"./ColumnConfigDialog-DYyfzMOY.js";import"./DraggableList-DAv0Dm5F.js";import"./search-BLvYvb41.js";import"./Input-CGbGPxHL.js";import"./useControlled-BilpsNEK.js";import"./Button-Cj2Rzj_x.js";import"./small-cross-dIKOYPBo.js";import"./ActionButton-qmmmYuGS.js";import"./Checkbox-CuBCvicT.js";import"./useValueChanged-D-aOQneF.js";import"./CollapsiblePanel-DF51Tb6H.js";import"./MultiColumnSortDialog-BeHYm0oj.js";import"./MenuTrigger-BXL-DwYA.js";import"./CompositeItem-BMVV3PhA.js";import"./ToolbarRootContext--QULbV7a.js";import"./getDisabledMountTransitionStyles-CVnZ4zDW.js";import"./getPseudoElementBounds-CrZB1QbV.js";import"./chevron-down-DrICZ5Jz.js";import"./index-Bu8THvZS.js";import"./error-BSNYyaSK.js";import"./BaseCbacBanner-B8-bK1KU.js";import"./makeExternalStore-Dy4LBBRG.js";import"./Tooltip-CLzQYsh0.js";import"./PopoverPopup--znTKWjy.js";import"./debounce-DR4NOvcQ.js";import"./useOsdkClient-ClOfe-xH.js";import"./tick-6T4uvXq1.js";import"./DropdownField-DPxf8Qq2.js";import"./isEqual-B4TW5YJf.js";import"./withOsdkMetrics-BlQ92REe.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
