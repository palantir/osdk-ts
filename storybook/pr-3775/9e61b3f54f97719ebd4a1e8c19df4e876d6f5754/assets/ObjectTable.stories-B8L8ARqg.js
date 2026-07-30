import{j as i}from"./iframe-ZAeU3zkK.js";import{O as p}from"./object-table-BI32PtsP.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-OuHyvBM9.js";import"./preload-helper-DFsW7uwK.js";import"./Table-l3mPBzd1.js";import"./index-C9bCg_D0.js";import"./Dialog-Btj1QDjF.js";import"./cross-ItoF_QFP.js";import"./svgIconContainer-kZIk52CD.js";import"./useBaseUiId-Cr86WIIa.js";import"./InternalBackdrop-lV80e5CV.js";import"./composite-DFfGy7b5.js";import"./index-BrY0sG19.js";import"./index-BSgExDm2.js";import"./index-B_QXRGZh.js";import"./useEventCallback-D1zmtjsN.js";import"./SkeletonBar-ke7cILwX.js";import"./LoadingCell-q8CMiXdE.js";import"./ColumnConfigDialog-CtJCCHtI.js";import"./DraggableList-BDeEbSFQ.js";import"./search-DGJLlzUF.js";import"./Input-DZJFdIf0.js";import"./useControlled-CsDf-xSS.js";import"./isEqual-B3qe3pS1.js";import"./isObject-DRgm0nAf.js";import"./Button-btiulsx-.js";import"./ActionButton-swfO8HME.js";import"./Checkbox-BaVNDqn9.js";import"./useValueChanged-BqnyuSl8.js";import"./CollapsiblePanel-BwEoPyuP.js";import"./MultiColumnSortDialog-C9IFmKTT.js";import"./MenuTrigger-Uiz0PELH.js";import"./CompositeItem-B-J0xggi.js";import"./ToolbarRootContext-6UgAqfrb.js";import"./getDisabledMountTransitionStyles-KElE6z_O.js";import"./getPseudoElementBounds-BeDlRbET.js";import"./chevron-down-D_k3Y51h.js";import"./index-CjDYZjtC.js";import"./error-MpDB7OgY.js";import"./BaseCbacBanner-BEF2jKkB.js";import"./makeExternalStore-CLF-6_HY.js";import"./Tooltip-h2W3NXYk.js";import"./PopoverPopup-COPtTg9S.js";import"./toNumber-CEti0auR.js";import"./useOsdkClient-CACsolCb.js";import"./tick-CK1j0r_S.js";import"./DropdownField-D279pPiY.js";import"./withOsdkMetrics-D_HYVVwC.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
