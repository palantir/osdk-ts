import{j as i}from"./iframe-BmlnQTDS.js";import{O as p}from"./object-table-DOQYnjEw.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-29wLxVQ_.js";import"./preload-helper-DfLDZ4kf.js";import"./Table-Bk4jmEEB.js";import"./index-CLn6IkRR.js";import"./Dialog-DeUvC3i9.js";import"./cross-D2DCGJW3.js";import"./svgIconContainer-D7BtKSB4.js";import"./useBaseUiId-CZoncXMq.js";import"./InternalBackdrop-Doq4lLxV.js";import"./composite-JyXlDwio.js";import"./index-DwxQTWS6.js";import"./index-bRRYzA0v.js";import"./index-Baw0QC21.js";import"./useEventCallback-DkTxWfbI.js";import"./SkeletonBar-q0dTxujL.js";import"./LoadingCell-B8_A9HoA.js";import"./ColumnConfigDialog-BXalWpKy.js";import"./DraggableList-B17zV0u2.js";import"./search-C6RrLSu8.js";import"./Input-DqKEEagj.js";import"./useControlled-YYP5n0_h.js";import"./Button-BG-8NdMv.js";import"./small-cross-Dlof1s20.js";import"./ActionButton-DE9HiBY7.js";import"./Checkbox-0QQWmnRC.js";import"./useValueChanged-Ijn1e6pk.js";import"./CollapsiblePanel-RUeZ1P51.js";import"./MultiColumnSortDialog-JJuRHrKX.js";import"./MenuTrigger-BnI9FDU6.js";import"./CompositeItem-DqcihoEf.js";import"./ToolbarRootContext-BMCSjw-P.js";import"./getDisabledMountTransitionStyles-B5FK3Ah0.js";import"./getPseudoElementBounds-897QWYoT.js";import"./chevron-down-CKSiKvYw.js";import"./index-PbmBNDrH.js";import"./error-C-2VL_3O.js";import"./BaseCbacBanner-Ca5lgifE.js";import"./makeExternalStore-qm8KAWql.js";import"./Tooltip-C2k0lBII.js";import"./PopoverPopup-Ci8t5NrM.js";import"./debounce-BY5vTAlu.js";import"./useOsdkClient-BIu_ph17.js";import"./tick-BV5MVFCS.js";import"./DropdownField-B_Iftwd-.js";import"./isEqual-BB6tEofr.js";import"./withOsdkMetrics-CfdTmR9K.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
