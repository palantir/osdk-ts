import{j as i}from"./iframe-BLyAG4qt.js";import{O as p}from"./object-table-NGNiskNG.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BS4W9nNe.js";import"./preload-helper-X2unNE1v.js";import"./Table-DBOtVTAg.js";import"./index-DRHjeWhY.js";import"./Dialog-Dc4tpC3L.js";import"./cross-zpmkdN3j.js";import"./svgIconContainer-BYhpNXbV.js";import"./useBaseUiId-BsqYTkrj.js";import"./InternalBackdrop-CwfcL7hz.js";import"./composite-DXp5HadG.js";import"./index-DSTh4XEz.js";import"./index-DfIb261n.js";import"./index-C9NYWSwp.js";import"./useEventCallback-6AhhLJg7.js";import"./SkeletonBar-DPmC_kej.js";import"./LoadingCell-D5DjHMWy.js";import"./ColumnConfigDialog-BC61SSau.js";import"./DraggableList-CDR_hlvX.js";import"./search-BnzIM1pO.js";import"./Input-COYDi8CV.js";import"./useControlled-vEPHT0r_.js";import"./Button-C4LVX8xd.js";import"./small-cross-D36GncLx.js";import"./ActionButton-CDA8eLMX.js";import"./Checkbox-CKtWNbzg.js";import"./useValueChanged-Csg5b8FM.js";import"./CollapsiblePanel-BMZ6E2uP.js";import"./MultiColumnSortDialog-DvjlzBJu.js";import"./MenuTrigger-D91NXJa0.js";import"./CompositeItem-DKNH-seI.js";import"./ToolbarRootContext-t3Sav1_0.js";import"./getDisabledMountTransitionStyles-DigoJAfC.js";import"./getPseudoElementBounds-CmuMJUdB.js";import"./chevron-down-Dl_PyCCQ.js";import"./index-D1BfEv3K.js";import"./error-CALDIyj0.js";import"./BaseCbacBanner-C0XhL7L-.js";import"./makeExternalStore-B6gSjutd.js";import"./Tooltip-BCO_7oJW.js";import"./PopoverPopup-B6km_FCr.js";import"./debounce-oQzszjOg.js";import"./useOsdkClient-BX4YSqf_.js";import"./tick-Mv4hM8lK.js";import"./DropdownField-BLxC4wsP.js";import"./isEqual-Djmdr7nK.js";import"./withOsdkMetrics-hrd9pp_O.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
