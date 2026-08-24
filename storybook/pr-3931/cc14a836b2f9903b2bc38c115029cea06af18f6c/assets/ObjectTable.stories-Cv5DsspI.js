import{j as i}from"./iframe-t8JLfFrV.js";import{O as p}from"./object-table-BuoQ4XMI.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D42LPRRV.js";import"./preload-helper-CpG0vhNh.js";import"./Table-DURgDP2Q.js";import"./index-BKF13I8U.js";import"./Dialog-Bq-PmYd-.js";import"./cross-DHcY-_Dr.js";import"./svgIconContainer-qWhULtlh.js";import"./useBaseUiId-D6QmQGbw.js";import"./InternalBackdrop-sT7DDCmz.js";import"./composite-DucXBgYZ.js";import"./index-FDv4gW4k.js";import"./index-CdIm4hCh.js";import"./index-DLb_P0fQ.js";import"./useEventCallback-CczZi8pM.js";import"./SkeletonBar-DDHpySGk.js";import"./LoadingCell-Y5z6Phez.js";import"./ColumnConfigDialog-BqSwPurl.js";import"./DraggableList-DMmER9ew.js";import"./search-4QP789O7.js";import"./Input-xRhXFxI5.js";import"./useControlled-BPo532GT.js";import"./Button-CsTwwOik.js";import"./small-cross-Cq-qnBfO.js";import"./ActionButton-CfpX88bl.js";import"./Checkbox-C6JHvvQ7.js";import"./useValueChanged-_KxSVJeX.js";import"./CollapsiblePanel-C-KMkQTO.js";import"./MultiColumnSortDialog-BTO4Xqfd.js";import"./MenuTrigger-wBePDtxt.js";import"./CompositeItem-DoQHaS8J.js";import"./ToolbarRootContext-Dlh09ihf.js";import"./getDisabledMountTransitionStyles-CYo2lWMe.js";import"./getPseudoElementBounds-tmZ9Ox8K.js";import"./chevron-down-Dnk4XBCN.js";import"./index-z9AQc1g7.js";import"./error-DjVNd1sK.js";import"./BaseCbacBanner-C8FtSuLa.js";import"./makeExternalStore-BN9bUK5B.js";import"./Tooltip-BsGdcpyA.js";import"./PopoverPopup-DqWhBpxm.js";import"./debounce-CCJFyWuV.js";import"./useOsdkClient-HL8ITlR_.js";import"./tick-v-ZyLIBY.js";import"./DropdownField-DXE-I7FT.js";import"./isEqual-B-6PSi29.js";import"./withOsdkMetrics-CJGbJg3y.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
