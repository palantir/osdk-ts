import{j as i}from"./iframe-B6WQQhy8.js";import{O as p}from"./object-table-BFB8XBQ_.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DmKqNyHI.js";import"./preload-helper-ChsmwISn.js";import"./Table-BJ48fYQb.js";import"./index-CZJ7wKSS.js";import"./Dialog-TiXVZi4t.js";import"./cross-DTGtSarw.js";import"./svgIconContainer-L79qlVtg.js";import"./useBaseUiId-qIW79UrF.js";import"./InternalBackdrop-DfDtW0xk.js";import"./composite-CHtKDR7j.js";import"./index-DovvsuXm.js";import"./index-JE_lKjA0.js";import"./index-DACugfUF.js";import"./useEventCallback-DB4LvSLv.js";import"./SkeletonBar-C_dRKANi.js";import"./LoadingCell-xWLJzCPm.js";import"./ColumnConfigDialog-CNH35am9.js";import"./DraggableList-Cb-QDuSG.js";import"./search-CFJ6Aknr.js";import"./Input-CBrPnRp5.js";import"./useControlled-CPqJu1d3.js";import"./isEqual-D7FEOiUM.js";import"./isObject-fWvF7JaM.js";import"./Button-5VoPTOux.js";import"./ActionButton-DH98knHC.js";import"./Checkbox-lYIsmAdD.js";import"./useValueChanged-DNKi3Im-.js";import"./CollapsiblePanel-Drauktfl.js";import"./MultiColumnSortDialog-BIPX08HG.js";import"./MenuTrigger-BDitvKcK.js";import"./CompositeItem-CYbk5fSZ.js";import"./ToolbarRootContext-BuUE0P6o.js";import"./getDisabledMountTransitionStyles-DPtRIq4D.js";import"./getPseudoElementBounds-DaSGSTHJ.js";import"./chevron-down-Dxw3b8ee.js";import"./index-BK5Yiwqs.js";import"./error-yDqP26O9.js";import"./BaseCbacBanner-wpa3ZMwy.js";import"./makeExternalStore-CjXhJZfv.js";import"./Tooltip-CHk_byN0.js";import"./PopoverPopup-_sbYg48w.js";import"./toNumber-0Syk-GH5.js";import"./useOsdkClient-CE-RTGap.js";import"./tick-Dyh4bebE.js";import"./DropdownField-CNVZC72F.js";import"./withOsdkMetrics-DQOgFRz6.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
