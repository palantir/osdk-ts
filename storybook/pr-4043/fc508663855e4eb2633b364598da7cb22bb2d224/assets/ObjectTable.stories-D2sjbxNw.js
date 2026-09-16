import{j as i}from"./iframe-DQjaRBUi.js";import{O as p}from"./object-table-HcfFLFjd.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CH1EDCAx.js";import"./preload-helper-B51_55sC.js";import"./Table-DNn5HplO.js";import"./index-a9fHowso.js";import"./Dialog-x-ohr3Xi.js";import"./cross-CzaogkbO.js";import"./svgIconContainer-P1Q9eNRM.js";import"./useBaseUiId-CsxSSmlu.js";import"./InternalBackdrop-CGlx2QtJ.js";import"./composite-h2wwgXba.js";import"./index-4Rz5xHWo.js";import"./index-4wWSGius.js";import"./index-CmZITiK9.js";import"./useEventCallback-NOj49XSF.js";import"./SkeletonBar-kfcTeHsF.js";import"./LoadingCell-BFabjyGm.js";import"./ColumnConfigDialog-DbijqrEN.js";import"./DraggableList-L_mP90gV.js";import"./search-Dh1WJUP1.js";import"./Input-CsAKN6EM.js";import"./useControlled-BLfmFiCd.js";import"./Button-DgMUmpJg.js";import"./small-cross-CFXecDDy.js";import"./ActionButton-DKLUDny4.js";import"./Checkbox-B2EtQtdS.js";import"./useValueChanged-ldsEspGn.js";import"./CollapsiblePanel-COn6Cc5t.js";import"./MultiColumnSortDialog-XY4IVXW6.js";import"./MenuTrigger-8JBd0ZP1.js";import"./CompositeItem-CKeLa0nw.js";import"./ToolbarRootContext-N17gF4sL.js";import"./getDisabledMountTransitionStyles-D9FvhRU-.js";import"./getPseudoElementBounds-BxgEvMoC.js";import"./chevron-down-BCCVuGBy.js";import"./index-T90468VQ.js";import"./error-w3bPHlOX.js";import"./BaseCbacBanner-BBLPrZ9R.js";import"./makeExternalStore-B1bL49mU.js";import"./Tooltip-BfdSll4I.js";import"./PopoverPopup-DROtk8sN.js";import"./debounce-DQESqZVa.js";import"./useOsdkClient-muvg_G4O.js";import"./tick-DrIoKrNo.js";import"./DropdownField-CvsinZmL.js";import"./isEqual-Dw4zfL1A.js";import"./withOsdkMetrics-DnZQS4XI.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
