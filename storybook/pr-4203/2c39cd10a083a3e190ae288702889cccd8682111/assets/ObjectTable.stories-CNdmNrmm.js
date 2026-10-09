import{j as i}from"./iframe-KOHCB4Ql.js";import{O as p}from"./object-table-D8tGB2lP.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Bs65mDh4.js";import"./preload-helper-C6JW-Yng.js";import"./Table-DiyuXitT.js";import"./index-BNcO0wRN.js";import"./Dialog-Pdx4pxY-.js";import"./cross-BUaadKZZ.js";import"./svgIconContainer-C4qAid9G.js";import"./useBaseUiId-CnRKbAt1.js";import"./InternalBackdrop-imINBtvi.js";import"./composite-ChHDZB6E.js";import"./index-CBKKW39b.js";import"./index-BQDXS8xb.js";import"./index-DCkGiwqv.js";import"./useEventCallback-Bb5XrgmO.js";import"./SkeletonBar-8CMS4org.js";import"./LoadingCell-BGAS2Ej2.js";import"./ColumnConfigDialog-DzQiv7Ph.js";import"./DraggableList-DatpWWqs.js";import"./search-Dd1zov5c.js";import"./Input-D6-DkH9C.js";import"./useControlled-BY7stmzf.js";import"./Button-uumGSIHU.js";import"./small-cross-CvWdYn_H.js";import"./ActionButton-D9pI43aQ.js";import"./Checkbox-CtLK0QgG.js";import"./useValueChanged-BSGCys20.js";import"./CollapsiblePanel-CHpI8fT2.js";import"./MultiColumnSortDialog-BxQvZ_d1.js";import"./MenuTrigger-CZ2N4HWH.js";import"./CompositeItem-wiNuWtyF.js";import"./ToolbarRootContext-DilrPmxZ.js";import"./getDisabledMountTransitionStyles-AK4QR3JS.js";import"./getPseudoElementBounds-DQfcxaUz.js";import"./chevron-down-InZk2kmp.js";import"./index-w7dGULd9.js";import"./error-C0G7w8jF.js";import"./BaseCbacBanner-CKj134qf.js";import"./makeExternalStore-DeVyI-Ob.js";import"./Tooltip-C7mgMzGT.js";import"./PopoverPopup-ysDfGGix.js";import"./debounce-BkPBmf3P.js";import"./useOsdkClient-CE0gmR96.js";import"./tick-B2vqXtjq.js";import"./DropdownField-Bm-pLwGh.js";import"./isEqual-CKwtOA-0.js";import"./withOsdkMetrics-BvJsymAS.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
