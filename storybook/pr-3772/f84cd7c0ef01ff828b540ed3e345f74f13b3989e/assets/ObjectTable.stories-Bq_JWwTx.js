import{j as i}from"./iframe-BcjmHG5Y.js";import{O as p}from"./object-table-C4pgDWQ3.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Cvt5mzt-.js";import"./preload-helper-CevB4zUw.js";import"./Table-DERF2Y3g.js";import"./index-WgcqtCT6.js";import"./Dialog-DzlZ0ulb.js";import"./cross-DoMlZBaZ.js";import"./svgIconContainer-CoM5Z7Ve.js";import"./useBaseUiId-CYrtGdJE.js";import"./InternalBackdrop-Dy54GwQQ.js";import"./composite-D6B2PGWO.js";import"./index-CsMXJwKN.js";import"./index-DpV3ZQ0J.js";import"./index-DSYJPx0N.js";import"./useEventCallback-Du9FLIz2.js";import"./SkeletonBar-Casjd6QM.js";import"./LoadingCell-pP6K6nBy.js";import"./ColumnConfigDialog-5r56BsKv.js";import"./DraggableList-DZrWEZ51.js";import"./search-jO8my80A.js";import"./Input-e_01wq9D.js";import"./useControlled-6NYxLXP3.js";import"./Button-DJfJDABU.js";import"./small-cross-BpYV_lGq.js";import"./ActionButton-U9wgeBuw.js";import"./Checkbox-TgEXnci4.js";import"./useValueChanged-66Q9-4Wr.js";import"./CollapsiblePanel-UzBakrGh.js";import"./MultiColumnSortDialog-Dynlb7gM.js";import"./MenuTrigger-BvOL2z14.js";import"./CompositeItem-DLw_ttOE.js";import"./ToolbarRootContext-DAX0lKDl.js";import"./getDisabledMountTransitionStyles-DOxn78aT.js";import"./getPseudoElementBounds-B6Q-orcE.js";import"./chevron-down-yt_M0O0c.js";import"./index-BuLxCPA9.js";import"./error-CYyfg8wo.js";import"./BaseCbacBanner-scUD9TTF.js";import"./makeExternalStore-qC0Amdtu.js";import"./Tooltip-BL83qiDs.js";import"./PopoverPopup-D9ZDT7jF.js";import"./debounce-B2HXz_6i.js";import"./useOsdkClient-9RXKzpNA.js";import"./tick-CSVnmAXo.js";import"./DropdownField-Depe1xc5.js";import"./isEqual-I_c9bwSC.js";import"./withOsdkMetrics-C3Z8dnVY.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
