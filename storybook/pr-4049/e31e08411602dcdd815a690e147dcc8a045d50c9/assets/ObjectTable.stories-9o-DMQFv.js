import{j as i}from"./iframe-CYdVR6sB.js";import{O as p}from"./object-table-ZxHLjbpQ.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-C034tAVP.js";import"./preload-helper-BXur23Md.js";import"./Table-BTEdK2br.js";import"./index-BALJL5HN.js";import"./Dialog-CIiEyQiz.js";import"./cross-Cw6hhHQ7.js";import"./svgIconContainer-BA_bcDbd.js";import"./useBaseUiId-DWAeiyj4.js";import"./InternalBackdrop--MuUQ9Ln.js";import"./composite-Cc3NubB-.js";import"./index-DoUPlBgv.js";import"./index-B8qCRObq.js";import"./index-BqyVDr6I.js";import"./useEventCallback-DQs5DmXL.js";import"./SkeletonBar-n38Gly5n.js";import"./LoadingCell-C7i97lZg.js";import"./ColumnConfigDialog-b6IYNXHE.js";import"./DraggableList-Dp6tw8Q3.js";import"./search-Ceaj3yJ_.js";import"./Input-8WX07h9e.js";import"./useControlled-DJ_ChqUq.js";import"./Button-DXqS5gF6.js";import"./small-cross-DNLJnJK1.js";import"./ActionButton-CJlnBbXa.js";import"./Checkbox-CSD08bSL.js";import"./useValueChanged-C6DcZDB6.js";import"./CollapsiblePanel-CJCKVm3B.js";import"./MultiColumnSortDialog-BX2U8Aqs.js";import"./MenuTrigger-DgEhPmqF.js";import"./CompositeItem-C73xX0Ds.js";import"./ToolbarRootContext-ryiKPViF.js";import"./getDisabledMountTransitionStyles-CA4nP4MP.js";import"./getPseudoElementBounds-DwFXzaQG.js";import"./chevron-down-BTVG76nb.js";import"./index-BfKW-3Wf.js";import"./error-D8UfR1ZG.js";import"./BaseCbacBanner-w9kh10oP.js";import"./makeExternalStore-CoWYgG6l.js";import"./Tooltip-tNCAdybw.js";import"./PopoverPopup-xCKZwX1o.js";import"./debounce-CbnfdRbo.js";import"./useOsdkClient-B70HxYsA.js";import"./tick-BTWCOhDI.js";import"./DropdownField-B6eovdov.js";import"./isEqual-qYEMRRs3.js";import"./withOsdkMetrics-DXfIJx3f.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
