import{j as i}from"./iframe-CE0i8pTB.js";import{O as p}from"./object-table-BqB2N9IL.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-nQ9xw1ct.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-C1VfsXyS.js";import"./index-B12pLj4f.js";import"./Dialog-B5WFHcUY.js";import"./cross-B7SwfS_M.js";import"./svgIconContainer-B8VYHmcD.js";import"./useBaseUiId-DyVtWBOW.js";import"./InternalBackdrop-BV_Rke0C.js";import"./composite-C3AQHTlr.js";import"./index-D0yQsmtH.js";import"./index-BxLsqAz-.js";import"./index-CWtwdWGx.js";import"./useEventCallback-OX93Cv40.js";import"./SkeletonBar-CseY9H7t.js";import"./LoadingCell-BhkoJpZq.js";import"./ColumnConfigDialog-EXxClbRv.js";import"./DraggableList-DoIC54Mt.js";import"./search-B_4eoJVo.js";import"./Input-Bhr3RBZS.js";import"./useControlled-CDXR85QA.js";import"./Button-CEwAliaC.js";import"./small-cross-Cqq_EZqy.js";import"./ActionButton-B8HjZLzN.js";import"./Checkbox-BQpLae3k.js";import"./useValueChanged-BNETI0SY.js";import"./CollapsiblePanel-BXnErSCf.js";import"./MultiColumnSortDialog-B8dHVGrh.js";import"./MenuTrigger-BtCRNzYm.js";import"./CompositeItem-Ei3HHm0y.js";import"./ToolbarRootContext-DUj8Vy75.js";import"./getDisabledMountTransitionStyles-C6UHxgiN.js";import"./getPseudoElementBounds-BNWxnzVQ.js";import"./chevron-down-D2N1M9YY.js";import"./index-DaY6cbYZ.js";import"./error-WOehnpts.js";import"./BaseCbacBanner-CP4iN72h.js";import"./makeExternalStore-CD97K3xm.js";import"./Tooltip-C8uGck5Z.js";import"./PopoverPopup-DjwUMmwA.js";import"./debounce-6QIE8t0g.js";import"./useOsdkClient-DcXY1zGj.js";import"./tick-_bZ7VOxl.js";import"./DropdownField-Drtn2NQI.js";import"./isEqual-BGT09CQh.js";import"./withOsdkMetrics-DRff-iWr.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
