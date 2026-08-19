import{j as i}from"./iframe-Bm9OwjZM.js";import{O as p}from"./object-table-BdOtMKtj.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DlTH6Xhu.js";import"./preload-helper-Bxv9zFay.js";import"./Table-C5d9fcW1.js";import"./index-CObn2eDC.js";import"./Dialog-YqtByMUq.js";import"./cross-Bo0UY3wT.js";import"./svgIconContainer-CGp9KnXA.js";import"./useBaseUiId-D5G-UFce.js";import"./InternalBackdrop-CSTuoliM.js";import"./composite-CV2pmKck.js";import"./index-CYRBkEMI.js";import"./index-CZ4br5bx.js";import"./index-D3K1YH6u.js";import"./useEventCallback-C1sCbiB1.js";import"./SkeletonBar-C4tbzHrf.js";import"./LoadingCell-Bob79hrl.js";import"./ColumnConfigDialog-BEpELY0Q.js";import"./DraggableList-aiQUDllv.js";import"./search-CMsxyB6o.js";import"./Input-BBarF8jI.js";import"./useControlled-DagSlxnt.js";import"./Button-DH8D07bO.js";import"./small-cross-CpEGyO2C.js";import"./ActionButton-b5H9Wsoo.js";import"./Checkbox-C42BhasO.js";import"./useValueChanged-BziSxweC.js";import"./CollapsiblePanel-CSPGJmMi.js";import"./MultiColumnSortDialog-DcTDhB5S.js";import"./MenuTrigger-N4nRkaQI.js";import"./CompositeItem-Dks46NaI.js";import"./ToolbarRootContext-BzeWV0Ij.js";import"./getDisabledMountTransitionStyles-DW6BIlyq.js";import"./getPseudoElementBounds-Dw9iwve0.js";import"./chevron-down-Ykcn_Zyn.js";import"./index-DzghPfIw.js";import"./error-CCuJWU5M.js";import"./BaseCbacBanner-CCrrjuO8.js";import"./makeExternalStore-B2bSqcMJ.js";import"./Tooltip-Ca0v0yFB.js";import"./PopoverPopup-LXlLsWEU.js";import"./debounce-Cg2J-NCz.js";import"./useOsdkClient-CN1s-vKt.js";import"./tick-C0wxgn1E.js";import"./DropdownField-tU79IoE9.js";import"./isEqual-lfYKGgFL.js";import"./withOsdkMetrics-OOsnIMnD.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
