import{j as i}from"./iframe-CpHLFs-j.js";import{O as p}from"./object-table-BG29GeR4.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-SX8lS6I8.js";import"./preload-helper-Cx-Hj9ji.js";import"./Table-DHh5DJrx.js";import"./index-CW31sxVo.js";import"./Dialog-CjH99TMo.js";import"./cross-BMDhbGFA.js";import"./svgIconContainer-DJggAQ_8.js";import"./useBaseUiId-BBJe7HZ5.js";import"./InternalBackdrop-CHxyyeuy.js";import"./composite-Bb9xsxZ2.js";import"./index-BwGfwj9E.js";import"./index-D9rBAzJN.js";import"./index-B5E7rOF0.js";import"./useEventCallback-VriGb282.js";import"./SkeletonBar-w38sk0nV.js";import"./LoadingCell-B0zpyYf5.js";import"./ColumnConfigDialog-CaXzHV4W.js";import"./DraggableList-CdkW8wkH.js";import"./search-Dk5Mmea1.js";import"./Input-NmfJ6xcB.js";import"./useControlled-CU11-enl.js";import"./isEqual-CutVO7k5.js";import"./isObject-D2XlcjpL.js";import"./Button-DIETzomk.js";import"./ActionButton-ul0M5wXt.js";import"./Checkbox-BKaZSLRi.js";import"./useValueChanged-CFaYTh5g.js";import"./CollapsiblePanel-CJpYUV1y.js";import"./MultiColumnSortDialog-D_eBdYA3.js";import"./MenuTrigger-Bh2VvTmF.js";import"./CompositeItem-BCOuwNbL.js";import"./ToolbarRootContext-DLyGA8_p.js";import"./getDisabledMountTransitionStyles-DTudamhk.js";import"./getPseudoElementBounds-Rlm7eOUv.js";import"./chevron-down-BHWF8sCh.js";import"./index-DrQ_7o0H.js";import"./error-CJHQsKq8.js";import"./BaseCbacBanner-BIspY_8u.js";import"./makeExternalStore-qrCwPWzZ.js";import"./Tooltip-BrPhE4PX.js";import"./PopoverPopup-DDxX24TR.js";import"./toNumber-DvEoKfvv.js";import"./useOsdkClient-BbD9fywh.js";import"./tick-DbZpgMGy.js";import"./DropdownField-CjbCjEN6.js";import"./withOsdkMetrics-dGfsU2Pa.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
