import{j as i}from"./iframe-ClFIQ8KG.js";import{O as p}from"./object-table-CIZ5wxZ_.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-4roW3n8W.js";import"./preload-helper-D-QzYjnt.js";import"./Table-DF1MSg5O.js";import"./index-CIPksERX.js";import"./Dialog-yohvHLrw.js";import"./cross-CzpL54rX.js";import"./svgIconContainer-BSoQXT4y.js";import"./useBaseUiId-CGYdOYHy.js";import"./InternalBackdrop-BYN0uwLY.js";import"./composite-CYuFvp7L.js";import"./index-D6fn_S1P.js";import"./index-CcH0wkbM.js";import"./index-C0bHrIL5.js";import"./useEventCallback-2FGON6Li.js";import"./SkeletonBar-BAxUsBjZ.js";import"./LoadingCell-CEEtcSs1.js";import"./ColumnConfigDialog-CNRH47Jy.js";import"./DraggableList-DpIRvCOG.js";import"./search-D9qR5ESv.js";import"./Input-DZLAYudG.js";import"./useControlled-DqI9i7cj.js";import"./Button-BMUicVal.js";import"./small-cross-CHjwGZnC.js";import"./ActionButton-DgvUkhlE.js";import"./Checkbox-DBPzyNV6.js";import"./useValueChanged-BfGI94ie.js";import"./CollapsiblePanel-BTYlq_dL.js";import"./MultiColumnSortDialog-O0VEBzdK.js";import"./MenuTrigger-Biet3JvN.js";import"./CompositeItem-Gl89whZy.js";import"./ToolbarRootContext-BD2PZEZ6.js";import"./getDisabledMountTransitionStyles-BON87G2B.js";import"./getPseudoElementBounds-CQu9cawX.js";import"./chevron-down-DJiIS0J4.js";import"./index-CRZWfRoV.js";import"./error-CA8gNZpF.js";import"./BaseCbacBanner-BQ99i8Jn.js";import"./makeExternalStore-CxxiTsbi.js";import"./Tooltip-C64qdZ5m.js";import"./PopoverPopup-BRxfVKHt.js";import"./debounce-CMubfxww.js";import"./useOsdkClient-De0OgZae.js";import"./tick-CveYwUx1.js";import"./DropdownField-O8-KkkYD.js";import"./isEqual-DsEEZELG.js";import"./withOsdkMetrics-of3GBGS8.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
