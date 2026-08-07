import{j as i}from"./iframe-R5joIy8i.js";import{O as p}from"./object-table-CgNAZxnk.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DR5ODz6P.js";import"./preload-helper-BDKQXXQd.js";import"./Table-B80Z2OYT.js";import"./index-BjtK3UNq.js";import"./Dialog-Ca0bgPoe.js";import"./cross-BLMm-Ql7.js";import"./svgIconContainer-KEF34-KT.js";import"./useBaseUiId-DzxPRuTg.js";import"./InternalBackdrop-C-TgLuPD.js";import"./composite-DoPpkoU1.js";import"./index-CV_jH-oS.js";import"./index-BCosmSDy.js";import"./index-CHRpbdDl.js";import"./useEventCallback-LMOxoj5R.js";import"./SkeletonBar-D1JBGL5F.js";import"./LoadingCell-CVulol-P.js";import"./ColumnConfigDialog-gVYcKPvo.js";import"./DraggableList-D0vAnTP4.js";import"./search-C23YmzRD.js";import"./Input-Bw5RXfMb.js";import"./useControlled-r3xQWVHF.js";import"./isEqual-9Rsr_ekw.js";import"./isObject-BMoCLrIv.js";import"./Button-CHY-MXSe.js";import"./ActionButton-Bqq9Ii8S.js";import"./Checkbox-BnjbZCw3.js";import"./useValueChanged-CZgv2A3P.js";import"./CollapsiblePanel-CcsZIIiD.js";import"./MultiColumnSortDialog-IarWhTir.js";import"./MenuTrigger-n3vs8F5z.js";import"./CompositeItem-B4wdPUIk.js";import"./ToolbarRootContext-CE7qJbgG.js";import"./getDisabledMountTransitionStyles-D7o0LPiO.js";import"./getPseudoElementBounds-DPnISsh9.js";import"./chevron-down-Bhu5S3ij.js";import"./index-IjrDNVAE.js";import"./error-BPV8EjSv.js";import"./BaseCbacBanner-rtYlPdLh.js";import"./makeExternalStore-BL3yv_tQ.js";import"./Tooltip-COhZTaOk.js";import"./PopoverPopup-CIuUTinA.js";import"./toNumber-Btv-h7uY.js";import"./useOsdkClient-B33djUjH.js";import"./tick-Cw9Y9tsY.js";import"./DropdownField-BGjG3ep6.js";import"./withOsdkMetrics--n59eel3.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
