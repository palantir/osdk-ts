import{j as i}from"./iframe-BW9rbZjN.js";import{O as p}from"./object-table-D6uyDopU.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DMuNYnL9.js";import"./preload-helper-_oZNT5AE.js";import"./Table-BoMRUDWK.js";import"./index-qZzwlkOA.js";import"./Dialog-BQ7qEwTW.js";import"./cross-BMKp4c2D.js";import"./svgIconContainer-c8HYcTYH.js";import"./useBaseUiId-bQLFYp4J.js";import"./InternalBackdrop-CKd5MsCE.js";import"./composite-DIc49Li7.js";import"./index-C88Pj_Ew.js";import"./index-CRuyPTCE.js";import"./index-DvSwkwzx.js";import"./useEventCallback-BwkPSbL2.js";import"./SkeletonBar-BlTcRZOI.js";import"./LoadingCell-BWEPztFD.js";import"./ColumnConfigDialog-D4cOUPl1.js";import"./DraggableList-Cjx102Hx.js";import"./search-CKuArl9i.js";import"./Input-DapIOR9y.js";import"./useControlled-C9bKjxUP.js";import"./Button-DXKWCxc8.js";import"./small-cross-DPXcetjy.js";import"./ActionButton-Br5-QwIr.js";import"./Checkbox-I9JLT3mi.js";import"./useValueChanged-5yWlHOsJ.js";import"./CollapsiblePanel-BO030zQL.js";import"./MultiColumnSortDialog-COlh9DSW.js";import"./MenuTrigger-ByyLkC45.js";import"./CompositeItem-CfT9zTJr.js";import"./ToolbarRootContext-tp4wTZqh.js";import"./getDisabledMountTransitionStyles-DuFqv9O7.js";import"./getPseudoElementBounds-cJb6hBmW.js";import"./chevron-down-DnA8hxYU.js";import"./index-DQfloIhJ.js";import"./error-DKZCTWAx.js";import"./BaseCbacBanner-B5oQvseO.js";import"./makeExternalStore-RW-A0j4x.js";import"./Tooltip-DARXcT77.js";import"./PopoverPopup-DZ1vqIll.js";import"./debounce-BijLWZBG.js";import"./useOsdkClient-CY_b6Lwm.js";import"./tick-qItvjZhi.js";import"./DropdownField-BoM_lVwS.js";import"./isEqual-BL5I-1RN.js";import"./withOsdkMetrics-C9bjwSD5.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
