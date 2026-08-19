import{j as i}from"./iframe-CFnZv6W6.js";import{O as p}from"./object-table-Bjjj8n_l.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DCPNbmgp.js";import"./preload-helper-DaeNTAOB.js";import"./Table-GJdNKuHh.js";import"./index-CVGV4KeD.js";import"./Dialog-w2kTwReC.js";import"./cross-C-tbaQSm.js";import"./svgIconContainer-Ds9wq937.js";import"./useBaseUiId-BHfosarc.js";import"./InternalBackdrop-B6eJf4h8.js";import"./composite-DpDQBUJx.js";import"./index-DxTVc7UT.js";import"./index-DqFASQeC.js";import"./index-DH3Lt-T4.js";import"./useEventCallback-CDzNiTKq.js";import"./SkeletonBar-DTeIxuG5.js";import"./LoadingCell-bclLlGod.js";import"./ColumnConfigDialog-BsoTMV0c.js";import"./DraggableList-CkGcCJHd.js";import"./search-CtPaFwvz.js";import"./Input-vKjFw9JB.js";import"./useControlled-C4TNuFLH.js";import"./Button-DWKNQBaA.js";import"./small-cross-D-8SDjlK.js";import"./ActionButton-BG_gQsLt.js";import"./Checkbox-DEsFYHqM.js";import"./useValueChanged-DGrgz3RO.js";import"./CollapsiblePanel-C1_1ATE6.js";import"./MultiColumnSortDialog-CN0GVjqJ.js";import"./MenuTrigger-X7sAyzkO.js";import"./CompositeItem-DPJBvKky.js";import"./ToolbarRootContext-CVCFeaES.js";import"./getDisabledMountTransitionStyles-COvsik1i.js";import"./getPseudoElementBounds-BeF4-PN3.js";import"./chevron-down-CzFq3N2b.js";import"./index-BSlJchRS.js";import"./error-Dr-3Rs7Z.js";import"./BaseCbacBanner-C3IHannt.js";import"./makeExternalStore-Di8vK866.js";import"./Tooltip-4s0ejNja.js";import"./PopoverPopup-Bn_YebPn.js";import"./debounce-CrW4vDcQ.js";import"./useOsdkClient-C-GCPnL_.js";import"./tick-Dmm-IbHN.js";import"./DropdownField-CJnnFWVL.js";import"./isEqual-DE3KBIZr.js";import"./withOsdkMetrics-BPf1l7aJ.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
