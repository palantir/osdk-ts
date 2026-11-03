import{j as i}from"./iframe-9A7AV9Cy.js";import{O as p}from"./object-table-CPJv4BYW.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CZWWhaGE.js";import"./preload-helper-CK_ZcGGF.js";import"./Table-B59cxmyO.js";import"./index-Bkgk7vsR.js";import"./Dialog-Bl9zekAE.js";import"./cross-B7t6TzDw.js";import"./svgIconContainer-CR0pIEyo.js";import"./useBaseUiId-q7QIFNkg.js";import"./InternalBackdrop-CQ3SkFUe.js";import"./composite-CEEJ0vWU.js";import"./index-C7xfgMTV.js";import"./index-BV5cRfRG.js";import"./index--u-sCo5n.js";import"./useEventCallback-DNZWa-fZ.js";import"./SkeletonBar-TosXJUxL.js";import"./LoadingCell-Dumj3M5j.js";import"./ColumnConfigDialog-CBjPf0Hz.js";import"./DraggableList-C57KPCMS.js";import"./search-BWRhS2Qj.js";import"./Input-CCxEn7sH.js";import"./useControlled-DIFFKw6v.js";import"./Button-CKepLiXu.js";import"./small-cross-1ULwRpx5.js";import"./ActionButton-1V5zer9B.js";import"./Checkbox-CnzsJ8SG.js";import"./useValueChanged-kZaWbmaa.js";import"./CollapsiblePanel-CKt0R28j.js";import"./MultiColumnSortDialog-00THcpjd.js";import"./MenuTrigger-BtqQkzdC.js";import"./CompositeItem-DoPsMeEK.js";import"./ToolbarRootContext-DCS282rA.js";import"./getDisabledMountTransitionStyles-_YA1Iepr.js";import"./getPseudoElementBounds-Bq0sNDj9.js";import"./chevron-down-Bi1tvw_Y.js";import"./index-CzE6ZkZ0.js";import"./error-C8bHM7uj.js";import"./BaseCbacBanner-BsVniqSH.js";import"./makeExternalStore-UebcDacP.js";import"./Tooltip-Dfs7CnEh.js";import"./PopoverPopup-hsESB4RR.js";import"./debounce-ADxFBf6q.js";import"./useOsdkClient-C7At4pV9.js";import"./tick-DlLbsS5l.js";import"./DropdownField-CNaJiffx.js";import"./isEqual-DKebV1YP.js";import"./withOsdkMetrics-B5obnKQC.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
