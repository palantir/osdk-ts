import{j as i}from"./iframe-ZQnTw6Mu.js";import{O as p}from"./object-table-VjCEQ2g5.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-ItIb_Qaf.js";import"./preload-helper-COwmt9io.js";import"./Table-DO7e5-3Q.js";import"./index-Bak_kxpO.js";import"./Dialog-C8YwB1to.js";import"./cross-dvjzW6Ys.js";import"./svgIconContainer-zMynHcXT.js";import"./useBaseUiId-Av3ESRn4.js";import"./InternalBackdrop-Qsz8azrK.js";import"./composite-CNYNMU2K.js";import"./index-Ik5TkMWF.js";import"./index-Bf52DBTe.js";import"./index-DfpvWPDi.js";import"./useEventCallback-CeUbtgbw.js";import"./SkeletonBar-Dgm9uPl0.js";import"./LoadingCell-CIjhjeS2.js";import"./ColumnConfigDialog-BWT2uBSi.js";import"./DraggableList-Ctrx9KC6.js";import"./search-BcJ2_wX2.js";import"./Input-BQqVIR5S.js";import"./useControlled-BApUdZQ6.js";import"./Button-kYFmJJeP.js";import"./small-cross-BLKDIIIs.js";import"./ActionButton-DY2D-_nH.js";import"./Checkbox-B7Q3lTD0.js";import"./useValueChanged-C4pb924U.js";import"./CollapsiblePanel-CxVYe-zl.js";import"./MultiColumnSortDialog-DYTtJA9W.js";import"./MenuTrigger-BovXshwK.js";import"./CompositeItem-agXPXgTu.js";import"./ToolbarRootContext-DbSl-Ybu.js";import"./getDisabledMountTransitionStyles-BtRqleFK.js";import"./getPseudoElementBounds-B3-Fohbc.js";import"./chevron-down-BYkOWi_f.js";import"./index-BKq3a1zJ.js";import"./error-BXfejV6f.js";import"./BaseCbacBanner-BUe4BhHO.js";import"./makeExternalStore-BK88dgnr.js";import"./Tooltip-CU9szSp1.js";import"./PopoverPopup-CEcziLeh.js";import"./debounce-B20oACA_.js";import"./useOsdkClient-FhDWA4Y3.js";import"./tick-CK4a_7vG.js";import"./DropdownField-CyRtpzR4.js";import"./isEqual-BMOE5IT2.js";import"./withOsdkMetrics-CrtXH3Cf.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
