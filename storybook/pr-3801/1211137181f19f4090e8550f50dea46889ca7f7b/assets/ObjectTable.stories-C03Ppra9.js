import{j as i}from"./iframe-eW0Hkx5D.js";import{O as p}from"./object-table-BfM-RhWz.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BWpCOQfu.js";import"./preload-helper-BrSVUlNp.js";import"./Table-DJEveXkn.js";import"./index-D2RKhBA_.js";import"./Dialog-wzBp4l1t.js";import"./cross-BDzkJdpr.js";import"./svgIconContainer-DncqIZzb.js";import"./useBaseUiId-DF1sZBey.js";import"./InternalBackdrop-iYnFgdG3.js";import"./composite-usGAMPIR.js";import"./index-el9I9AU6.js";import"./index-DxrGtqe2.js";import"./index-Ce6kNSeo.js";import"./useEventCallback-B4Mnv5M-.js";import"./SkeletonBar-C5_iPS56.js";import"./LoadingCell-9a3BgmQe.js";import"./ColumnConfigDialog-DnbMGILk.js";import"./DraggableList-CkY-PQrW.js";import"./search-Uy7nbnTV.js";import"./Input-D6VOqKfH.js";import"./useControlled-DyHt7C5v.js";import"./isEqual-CnInsNgD.js";import"./isObject-Bfk74yGT.js";import"./Button-COXaioI0.js";import"./ActionButton-DrmAvEU8.js";import"./Checkbox-BcIymDaH.js";import"./useValueChanged-DfVz66Q7.js";import"./CollapsiblePanel-6tYRFBFM.js";import"./MultiColumnSortDialog-DdmowEKs.js";import"./MenuTrigger-DHcaFLQp.js";import"./CompositeItem-6Fe6wWN7.js";import"./ToolbarRootContext-BjqmUCcn.js";import"./getDisabledMountTransitionStyles-Bzmw5-JY.js";import"./getPseudoElementBounds-BquPH41g.js";import"./chevron-down-D8531Sp8.js";import"./index-Cw13LNzi.js";import"./error-EIPWSpKZ.js";import"./BaseCbacBanner-D-aN3uiT.js";import"./makeExternalStore-BTGS1fMn.js";import"./Tooltip-ivLdiLw3.js";import"./PopoverPopup-BwtdOo4G.js";import"./toNumber-DE3-i91E.js";import"./useOsdkClient-DPj6Xj16.js";import"./tick-2EgyxYOL.js";import"./DropdownField-Bc6nqXg7.js";import"./withOsdkMetrics-U1NMWhqT.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
