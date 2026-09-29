import{j as i}from"./iframe-D8QP41pb.js";import{O as p}from"./object-table-BYrGksL1.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-5WaxbznZ.js";import"./preload-helper-rYx5aepV.js";import"./Table-BxriQm8K.js";import"./index-ptxv2enP.js";import"./Dialog-BqcUisPw.js";import"./cross-C4B55KNt.js";import"./svgIconContainer-CRypdVCt.js";import"./useBaseUiId-BoqMbBaF.js";import"./InternalBackdrop-CKHEvFzx.js";import"./composite-sgwSF-wx.js";import"./index-Cgw2ueis.js";import"./index-Dng6rJam.js";import"./index-CNNBeMhh.js";import"./useEventCallback-DdNo-ccX.js";import"./SkeletonBar-Csa-9swL.js";import"./LoadingCell-D_i2XUNr.js";import"./ColumnConfigDialog-Cd26VZI3.js";import"./DraggableList-NlKXxKYZ.js";import"./search-C3wepv5K.js";import"./Input-lEEPXcpp.js";import"./useControlled-G3ngQ_8d.js";import"./Button-CyBwq7g0.js";import"./small-cross-BtPSf5__.js";import"./ActionButton-Bvgk-75l.js";import"./Checkbox-EtH8CkIm.js";import"./useValueChanged-9pWqBbjF.js";import"./CollapsiblePanel-Cxlgd4Ev.js";import"./MultiColumnSortDialog-ZgWNUGdf.js";import"./MenuTrigger-BJGTKCX4.js";import"./CompositeItem-nSbVFhm7.js";import"./ToolbarRootContext-DDihycVp.js";import"./getDisabledMountTransitionStyles-EIaHnfB3.js";import"./getPseudoElementBounds-DtmmKYOt.js";import"./chevron-down-7YXmtC0t.js";import"./index-BOgqeeRL.js";import"./error-D-e6D9Uk.js";import"./BaseCbacBanner-BwQAputt.js";import"./makeExternalStore-DKTVVSUo.js";import"./Tooltip-oiN_I4PZ.js";import"./PopoverPopup-CzD111vI.js";import"./debounce-tZf_e5M0.js";import"./useOsdkClient-DsLeguWM.js";import"./tick-DIslqI7R.js";import"./DropdownField-BxbakFzB.js";import"./isEqual-DlOUWIw3.js";import"./withOsdkMetrics-nBhke6l1.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
