import{j as i}from"./iframe-Dm6fEHSl.js";import{O as p}from"./object-table-DnFCrXZi.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Dml-1xiA.js";import"./preload-helper-Bqb1rZ_1.js";import"./Table-BihK-ML9.js";import"./index-0oZqapnL.js";import"./Dialog-DBnyMnw4.js";import"./cross-Bt5YxcTr.js";import"./svgIconContainer-DQYcgJEu.js";import"./useBaseUiId-DheuxufY.js";import"./InternalBackdrop-CWYVY9cc.js";import"./composite-Dro01qd5.js";import"./index-B9LtevwQ.js";import"./index-CFKD3KmR.js";import"./index-DLRHryCX.js";import"./useEventCallback-CRhDiDVJ.js";import"./SkeletonBar-CuUg8o4-.js";import"./LoadingCell-BpReS1Uv.js";import"./ColumnConfigDialog-CHcXL66b.js";import"./DraggableList-CsP1XmWO.js";import"./search-C7KxNUeL.js";import"./Input-C1Iecv69.js";import"./useControlled-BNqne-mh.js";import"./Button-DtwGlaif.js";import"./small-cross-DZMVW_os.js";import"./ActionButton-BcLZ8dUx.js";import"./Checkbox-CE6rrq8N.js";import"./useValueChanged-DdVY_JQU.js";import"./CollapsiblePanel-CPNer4jD.js";import"./MultiColumnSortDialog-liHRsGTS.js";import"./MenuTrigger-bZ6gnwnL.js";import"./CompositeItem-BlaUOs4g.js";import"./ToolbarRootContext-2ybRt6Lm.js";import"./getDisabledMountTransitionStyles-C5jTdX4L.js";import"./getPseudoElementBounds-B0DqqRGA.js";import"./chevron-down-CWH7kW7k.js";import"./index-nzPy6itP.js";import"./error-CtkZoki4.js";import"./BaseCbacBanner-DvfiGpMO.js";import"./makeExternalStore-Ctl6TIlE.js";import"./Tooltip-R_AQOimg.js";import"./PopoverPopup-DXuTelnl.js";import"./debounce-D-AGcw8s.js";import"./useOsdkClient-CBlvauOc.js";import"./tick-QJWik-78.js";import"./DropdownField-DGrJZFlx.js";import"./isEqual-CuOjpzUY.js";import"./withOsdkMetrics-BttmRgw9.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
