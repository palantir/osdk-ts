import{j as i}from"./iframe-CEbiJF3f.js";import{O as p}from"./object-table-l5DPuuw6.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DS56mKYn.js";import"./preload-helper--fKrMWtx.js";import"./Table-QdTH_HbG.js";import"./index-BRgb61-Z.js";import"./Dialog-B7q4XORi.js";import"./cross-Be87dRvq.js";import"./svgIconContainer-CApLlW_3.js";import"./useBaseUiId-BeYV2UYU.js";import"./InternalBackdrop-CWMLQJAd.js";import"./composite-u77iw9-s.js";import"./index-DjCMbuHr.js";import"./index-CW5Q51QX.js";import"./index-CRAw0ImC.js";import"./useEventCallback-B1x1-FvS.js";import"./SkeletonBar-COyoJDUZ.js";import"./LoadingCell-D1do7JHy.js";import"./ColumnConfigDialog-CTF7Yu1b.js";import"./DraggableList-DBwRCP6S.js";import"./search-0rzEE67s.js";import"./Input-DqoIy3Li.js";import"./useControlled-B3SpxFFa.js";import"./Button-BrIf-_b8.js";import"./small-cross-D4xWb1jq.js";import"./ActionButton-CQIzGqaS.js";import"./Checkbox-ClLrXql_.js";import"./useValueChanged-CMcadSWU.js";import"./CollapsiblePanel-DhxijBYj.js";import"./MultiColumnSortDialog-BCMu3SVh.js";import"./MenuTrigger-D_puwtx9.js";import"./CompositeItem-D6m2hJvC.js";import"./ToolbarRootContext-FCi4TTjo.js";import"./getDisabledMountTransitionStyles-C9wPoLZe.js";import"./getPseudoElementBounds-BE7nCALs.js";import"./chevron-down-SWbuBgt1.js";import"./index-DjIJ3azX.js";import"./error-q5QL61EF.js";import"./BaseCbacBanner-5dQqe5p_.js";import"./makeExternalStore-DY8wBZ1L.js";import"./Tooltip-pyeRzdyt.js";import"./PopoverPopup-BYAEm86P.js";import"./debounce-DedZNKWR.js";import"./useOsdkClient-YUQ2ZKSl.js";import"./tick-1Ij9OHtP.js";import"./DropdownField-DbwRCAUl.js";import"./isEqual-Fw1VuUqB.js";import"./withOsdkMetrics-C-j5mTrT.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
