import{j as i}from"./iframe-kpUBKcBo.js";import{O as p}from"./object-table-DVI3tGuH.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Btm5SQlY.js";import"./preload-helper-CEFfxAxV.js";import"./Table-BiN_aC4V.js";import"./index-CzIfSD2x.js";import"./Dialog-hBnbAc_e.js";import"./cross-CsmLqXcs.js";import"./svgIconContainer-D1XUyLZc.js";import"./useBaseUiId-eq47N9Yh.js";import"./InternalBackdrop-DVlojBH2.js";import"./composite-DqwQEgXz.js";import"./index-Cg38QLat.js";import"./index-nssiJGD2.js";import"./index-6t1ngEdK.js";import"./useEventCallback-BdQ28hwQ.js";import"./SkeletonBar-DS70zOH6.js";import"./LoadingCell-LNiY6iol.js";import"./ColumnConfigDialog-DIRwtqwm.js";import"./DraggableList-D6O5_Ce_.js";import"./search-D4qHiAMZ.js";import"./Input-xZVHbMZj.js";import"./useControlled-C4e8W1YD.js";import"./Button-IGB5Y7yU.js";import"./small-cross-CiRkoian.js";import"./ActionButton-Ro556bBe.js";import"./Checkbox-BMh40uEe.js";import"./useValueChanged-DJoTowgi.js";import"./CollapsiblePanel-BOpgrZXx.js";import"./MultiColumnSortDialog-CIWBS5RX.js";import"./MenuTrigger-DduVQheP.js";import"./CompositeItem-ChylY6HS.js";import"./ToolbarRootContext-CcFhYs5t.js";import"./getDisabledMountTransitionStyles-_MqiT5fI.js";import"./getPseudoElementBounds-DZf2g3Nn.js";import"./chevron-down-CeKigphE.js";import"./index-fVh42c2P.js";import"./error-DS4cKU2L.js";import"./BaseCbacBanner-BFifP6cY.js";import"./makeExternalStore-DQTLFAQr.js";import"./Tooltip-uU_kBQ9q.js";import"./PopoverPopup-D3WckLAC.js";import"./debounce-ClFDaysW.js";import"./useOsdkClient-BcqrqAzc.js";import"./tick-BmvMnIBg.js";import"./DropdownField-BrydZO3u.js";import"./isEqual-Bqos626r.js";import"./withOsdkMetrics-DpMhi7xT.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
