import{j as i}from"./iframe-BYL7doMn.js";import{O as p}from"./object-table-V267myMJ.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BZIV2cXq.js";import"./preload-helper-WjgK3yby.js";import"./Table-BA_92qvg.js";import"./index-DGp8JCsS.js";import"./Dialog-CMqzmjeu.js";import"./cross-As5FKXY-.js";import"./svgIconContainer-_aqU2ceG.js";import"./useBaseUiId-BDHrOOKV.js";import"./InternalBackdrop-Dj_rHuJA.js";import"./composite-DVT3Eov_.js";import"./index-BNCWFBwe.js";import"./index-B9iEbSri.js";import"./index-DPYDxTi4.js";import"./useEventCallback-Di1Qg9EE.js";import"./SkeletonBar-5t32e3g1.js";import"./LoadingCell-DcOdnC0j.js";import"./ColumnConfigDialog-CMj_U7ZP.js";import"./DraggableList-Du7vhXR6.js";import"./search-D5xrbzeg.js";import"./Input-CdbOxxHJ.js";import"./useControlled-v5GLNOSM.js";import"./Button-D8YUSgO5.js";import"./small-cross-BTIlfNGz.js";import"./ActionButton-qrKLXhxR.js";import"./Checkbox-PCLWJ8pS.js";import"./useValueChanged-CPcnC0pw.js";import"./CollapsiblePanel-C3ibyufi.js";import"./MultiColumnSortDialog-DRNlFUoI.js";import"./MenuTrigger-5G_f-uSX.js";import"./CompositeItem--33NfDsU.js";import"./ToolbarRootContext-BRf2421Z.js";import"./getDisabledMountTransitionStyles-CeI4j3Nx.js";import"./getPseudoElementBounds-DNSU3P07.js";import"./chevron-down-CE9oTrOB.js";import"./index-C_YsYgd4.js";import"./error-CTTbPhSu.js";import"./BaseCbacBanner-ZpT21Jaa.js";import"./makeExternalStore-DN7NmVRj.js";import"./Tooltip-BCtrBqwm.js";import"./PopoverPopup-CNV_9kc0.js";import"./debounce-RtjII4tG.js";import"./useOsdkClient-D6ajiaFe.js";import"./tick-DO5AFC-5.js";import"./DropdownField-eU4OOCad.js";import"./isEqual-BZ_ll_pL.js";import"./withOsdkMetrics-Cw_wIhS5.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
