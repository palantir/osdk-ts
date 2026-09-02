import{j as i}from"./iframe-CO-y4TdN.js";import{O as p}from"./object-table-CUW8bU6f.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-C42r3A2_.js";import"./preload-helper-CjyFmI8K.js";import"./Table-rN1rPeLW.js";import"./index-BvlbGIzZ.js";import"./Dialog-CBdKrEH-.js";import"./cross-C5dLLhyh.js";import"./svgIconContainer-CndQfIvO.js";import"./useBaseUiId-JbgqorN2.js";import"./InternalBackdrop-B_JDnFUv.js";import"./composite-CpRI4cG_.js";import"./index-Bpe4fXs9.js";import"./index-CokB0b6k.js";import"./index-BYwfC7H9.js";import"./useEventCallback-CnPqTEiA.js";import"./SkeletonBar-BNBMw-sd.js";import"./LoadingCell-C6wndQb-.js";import"./ColumnConfigDialog-Cm8SAy61.js";import"./DraggableList-BW39ee41.js";import"./search-Bc1itZDf.js";import"./Input-hfVPciHP.js";import"./useControlled-C5lB0Y_-.js";import"./Button-B8DTN9QH.js";import"./small-cross-CvGBi9-r.js";import"./ActionButton-BmIkStKV.js";import"./Checkbox-DhUWlYpn.js";import"./useValueChanged-DAwmS2z_.js";import"./CollapsiblePanel-D-FGJL1V.js";import"./MultiColumnSortDialog-CwKViLBZ.js";import"./MenuTrigger-DcMTnf6L.js";import"./CompositeItem-C9K9ap8i.js";import"./ToolbarRootContext-DhfbkfjQ.js";import"./getDisabledMountTransitionStyles-24Mq1L47.js";import"./getPseudoElementBounds-CwTC3_6Z.js";import"./chevron-down-DcENhPxj.js";import"./index-D0Bl1hu0.js";import"./error-CwAmKxgu.js";import"./BaseCbacBanner-CIXhelO6.js";import"./makeExternalStore-DjtvJt2I.js";import"./Tooltip-BmXHzlNq.js";import"./PopoverPopup-CnG3HuBu.js";import"./debounce-NLjoYl0e.js";import"./useOsdkClient-e3M3fG2D.js";import"./tick-D0RcBagt.js";import"./DropdownField-tV31hf4I.js";import"./isEqual-CRfTLq5O.js";import"./withOsdkMetrics-BplgaXU_.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
