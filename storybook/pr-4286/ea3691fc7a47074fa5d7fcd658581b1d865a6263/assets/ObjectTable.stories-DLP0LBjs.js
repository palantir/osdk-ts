import{j as i}from"./iframe-4r61WmRz.js";import{O as p}from"./object-table-BsaeOGuC.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-C3VAklZe.js";import"./preload-helper-DDuQcRVJ.js";import"./Table-CUAjVu0c.js";import"./index-kkt68f5x.js";import"./Dialog-Dv_rcbVl.js";import"./cross-CNjOzwil.js";import"./svgIconContainer-EEsRKnTp.js";import"./useBaseUiId-B6Vv4jgV.js";import"./InternalBackdrop-Bzos0xM-.js";import"./composite-DlrParFv.js";import"./index-3UzI-GML.js";import"./index-Nju1pOqo.js";import"./index-YOStIHYQ.js";import"./useEventCallback-Mutezj7j.js";import"./SkeletonBar-qrhSNk5E.js";import"./LoadingCell-CRbSuUAx.js";import"./ColumnConfigDialog-B6dj10_o.js";import"./DraggableList-sEL7oibm.js";import"./search-D6jPfv1v.js";import"./Input-gOgOsLX3.js";import"./useControlled-586q8Cy3.js";import"./Button-gqFcTzpQ.js";import"./small-cross-DRIvZps7.js";import"./ActionButton-CjM_8QQ8.js";import"./Checkbox-BLKo8bIb.js";import"./useValueChanged-Bi7kMqvE.js";import"./CollapsiblePanel-C45NHvuI.js";import"./MultiColumnSortDialog-Cy7Vy43Z.js";import"./MenuTrigger-D1ofJi20.js";import"./CompositeItem-D0ha4eYX.js";import"./ToolbarRootContext-B5z6j76t.js";import"./getDisabledMountTransitionStyles-1j4GIo6j.js";import"./getPseudoElementBounds-DvDk6n8U.js";import"./chevron-down-fJwSRjPJ.js";import"./index-C1bohVU8.js";import"./error-DeL9Ip3k.js";import"./BaseCbacBanner-CP1WFrzm.js";import"./makeExternalStore-DOF5HV2v.js";import"./Tooltip-DaNbGCQf.js";import"./PopoverPopup-DIv3maom.js";import"./debounce-CXjzscB7.js";import"./useOsdkClient-D-iMASPG.js";import"./tick-DLIe0J3Q.js";import"./DropdownField-TF8tLIy4.js";import"./isEqual-661UodeM.js";import"./withOsdkMetrics-B9hUZ7DO.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
