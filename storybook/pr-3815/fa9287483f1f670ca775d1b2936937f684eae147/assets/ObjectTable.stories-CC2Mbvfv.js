import{j as i}from"./iframe-9-Df-LIJ.js";import{O as p}from"./object-table-B124FTHg.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-ydS1dOFF.js";import"./preload-helper-DCEoRWVY.js";import"./Table-B99stKfq.js";import"./index-CmMoO6Ab.js";import"./Dialog-rM4yBLfb.js";import"./cross-AVBxO2wq.js";import"./svgIconContainer-CzbhhJSw.js";import"./useBaseUiId-CmM9rxW8.js";import"./InternalBackdrop-BxohvQV3.js";import"./composite-BEjSgt66.js";import"./index-DGNsP-w2.js";import"./index-B7Tyltek.js";import"./index-BNQc9m_n.js";import"./useEventCallback-Catk2moi.js";import"./SkeletonBar-DUxSEbIz.js";import"./LoadingCell-Bt6rXw2C.js";import"./ColumnConfigDialog-kkDBjdQ7.js";import"./DraggableList-DCMiU0kK.js";import"./search-Dkc3mdwO.js";import"./Input-BYsu1Abh.js";import"./useControlled-CvfHdbPA.js";import"./createLabelsContext-CzvgkkdI.js";import"./small-cross-ClJF0W2q.js";import"./Button-D-l8XO1Q.js";import"./ActionButton-G_Towlh-.js";import"./Checkbox-CT7dBybc.js";import"./useValueChanged-CekEGMLc.js";import"./CollapsiblePanel-B7kYsjAX.js";import"./MultiColumnSortDialog-BYCLRZ6I.js";import"./MenuTrigger-BSiGuHtc.js";import"./CompositeItem-C6gHKrG3.js";import"./ToolbarRootContext-BfdRsuSy.js";import"./getDisabledMountTransitionStyles-D65O5-tA.js";import"./getPseudoElementBounds-DudWCT_m.js";import"./chevron-down-DrB3Djp3.js";import"./index-D9m9B2qL.js";import"./error-Cp81RDFu.js";import"./BaseCbacBanner-YY7msBZC.js";import"./makeExternalStore-D3sOoyLv.js";import"./Tooltip-OA5xF1kb.js";import"./PopoverPopup-dpR8diVX.js";import"./Combobox-WKz-EtO8.js";import"./useOsdkClient-B_QNp0pP.js";import"./tick-D4umhwei.js";import"./DropdownField-_D_cQUcr.js";import"./withOsdkMetrics-qKmdojlP.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
