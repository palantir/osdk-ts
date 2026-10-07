import{j as i}from"./iframe-Dc7sxM32.js";import{O as p}from"./object-table-DJlddXis.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Ci6VYedr.js";import"./preload-helper-CM7tzFvC.js";import"./Table-BbU-9j4x.js";import"./index-IZwYZumw.js";import"./Dialog-BS6pgeCo.js";import"./cross-DB407VGu.js";import"./svgIconContainer-C-2lOjfc.js";import"./useBaseUiId-CH01Yaez.js";import"./InternalBackdrop-CdgMX2OS.js";import"./composite-BoHCITiY.js";import"./index-BWWceLi5.js";import"./index-BPTBY4qT.js";import"./index-7jp2fSwL.js";import"./useEventCallback-D6HBkFfp.js";import"./SkeletonBar-CQMTmIpY.js";import"./LoadingCell-D4ydqpTZ.js";import"./ColumnConfigDialog-BBBaXJZu.js";import"./DraggableList-CdXD1wY3.js";import"./search-CtqsOWX2.js";import"./Input-C0cMc9zy.js";import"./useControlled-CAz0cW4V.js";import"./Button-D0LwqFFz.js";import"./small-cross-BtHf4A8K.js";import"./ActionButton-7gTODAoI.js";import"./Checkbox-3AxTYCZS.js";import"./useValueChanged-LFwat5aB.js";import"./CollapsiblePanel-CHgHDq3b.js";import"./MultiColumnSortDialog-DAL8Zs0N.js";import"./MenuTrigger-BF79KnmQ.js";import"./CompositeItem-hDzKKSGM.js";import"./ToolbarRootContext-DVEPWNiK.js";import"./getDisabledMountTransitionStyles-CeArVJQO.js";import"./getPseudoElementBounds-BvdzEwkz.js";import"./chevron-down-BlnQ68Oi.js";import"./index-C72rir5P.js";import"./error-ritcfIW_.js";import"./BaseCbacBanner-JmRjJLBF.js";import"./makeExternalStore-CKmXRF_o.js";import"./Tooltip-Ce7TXbJ9.js";import"./PopoverPopup-CDeJDWbE.js";import"./debounce-BCcRr2wZ.js";import"./useOsdkClient-DqACciKT.js";import"./tick-C0UHVHiV.js";import"./DropdownField-DjNhNazw.js";import"./isEqual-MOH2rhy-.js";import"./withOsdkMetrics-CI_RMXn8.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
