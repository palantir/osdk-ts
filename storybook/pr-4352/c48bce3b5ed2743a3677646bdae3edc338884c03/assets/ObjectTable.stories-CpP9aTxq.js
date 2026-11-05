import{j as i}from"./iframe-ClYhC0-S.js";import{O as p}from"./object-table-Dqu58rUu.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-x1Vup-_y.js";import"./preload-helper-CNkkVcag.js";import"./Table-C4Oz59hI.js";import"./index-Bmj0xk3d.js";import"./Dialog-B3za_J3t.js";import"./cross-C_2oyR03.js";import"./svgIconContainer-9bIBfj8h.js";import"./useBaseUiId-Dd8fT170.js";import"./InternalBackdrop-BvLY_ojf.js";import"./composite-BwqNvQ0F.js";import"./index-D8PsRgog.js";import"./index-CI-u4eDt.js";import"./index-BMLvSUmF.js";import"./useEventCallback-DNonn3MU.js";import"./SkeletonBar-BZOsAT84.js";import"./LoadingCell-sf3vBVse.js";import"./ColumnConfigDialog-CW2Pt_n3.js";import"./DraggableList-C1XdGFJ9.js";import"./search-BBIKhGWf.js";import"./Input-D8CWVoNO.js";import"./useControlled-4Gm1FEJo.js";import"./Button-Dg23Hvs4.js";import"./small-cross-aEaqetZ9.js";import"./ActionButton-DNeWdOgS.js";import"./Checkbox-BEAZN8rt.js";import"./useValueChanged-6OE2Wa-N.js";import"./CollapsiblePanel-CGTT3k_x.js";import"./MultiColumnSortDialog-BCKeJgV_.js";import"./MenuTrigger-DajGnyRI.js";import"./CompositeItem-CPrfZrML.js";import"./ToolbarRootContext-DAdrKT5D.js";import"./getDisabledMountTransitionStyles-DrhK1CmR.js";import"./getPseudoElementBounds-CqY0Dp1D.js";import"./chevron-down-DJbVh1LY.js";import"./index-cVgcsKtQ.js";import"./error-BD_aaRfa.js";import"./BaseCbacBanner-DiaW3k_F.js";import"./makeExternalStore-BHHGj5YL.js";import"./Tooltip-Cq73361T.js";import"./isObject-BxkrbndP.js";import"./debounce-Ck8WOOl2.js";import"./useOsdkClient-C5IVuxHo.js";import"./tick-BT7qCCyz.js";import"./DropdownField-DcyfDtmr.js";import"./isEqual-_vvRFbmo.js";import"./_baseIsEqual-BnmLXaSx.js";import"./withOsdkMetrics-BvbgqpCV.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,de={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const ye=["Default"];export{n as Default,ye as __namedExportsOrder,de as default};
