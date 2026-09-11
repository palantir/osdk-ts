import{j as i}from"./iframe-D0YyS42l.js";import{O as p}from"./object-table-CsPo5lHe.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DiQgv9Jj.js";import"./preload-helper-BCB_Qe4i.js";import"./Table-DmK1C8ks.js";import"./index-Bsavn4W3.js";import"./Dialog-EjsJw5-J.js";import"./cross-dsq08tGB.js";import"./svgIconContainer-ppOpPTiK.js";import"./useBaseUiId-D4SQ7WJt.js";import"./InternalBackdrop-D9upuHND.js";import"./composite-z8nqybue.js";import"./index-O1djYu27.js";import"./index-C1kCmh68.js";import"./index-Dc1DVeAQ.js";import"./useEventCallback-ME00EgX0.js";import"./SkeletonBar-CbGoPUD7.js";import"./LoadingCell-CVFITrWD.js";import"./ColumnConfigDialog-CEQhrFLN.js";import"./DraggableList-ZNBH6tKf.js";import"./search-BXsTnHq3.js";import"./Input-souD-H1n.js";import"./useControlled-BGd4K6A9.js";import"./Button-tmtP2Iw5.js";import"./small-cross-DJSbcK9x.js";import"./ActionButton-XaTJJChP.js";import"./Checkbox-CLwwfXbn.js";import"./useValueChanged-ekySp4OE.js";import"./CollapsiblePanel-Bw7Zr0mb.js";import"./MultiColumnSortDialog-CAYbTieg.js";import"./MenuTrigger-uB1AY9kr.js";import"./CompositeItem-CUm9EsTA.js";import"./ToolbarRootContext-Dm0HFQW0.js";import"./getDisabledMountTransitionStyles-K03_8xe9.js";import"./getPseudoElementBounds-b9qWfldr.js";import"./chevron-down-B2Awu_XJ.js";import"./index-B-0gmAXF.js";import"./error-CbeKU1Tz.js";import"./BaseCbacBanner-S7dKB68J.js";import"./makeExternalStore-Bdcno4ct.js";import"./Tooltip-BQWGFJIA.js";import"./PopoverPopup-VnWmhErJ.js";import"./debounce-La9qLeq9.js";import"./useOsdkClient-B0pex126.js";import"./tick-SAyJyQPf.js";import"./DropdownField-CTN60ABC.js";import"./isEqual-dUJT8L9I.js";import"./withOsdkMetrics-D7tqwlWZ.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
