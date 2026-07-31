import{j as i}from"./iframe-BgoKo-i2.js";import{O as p}from"./object-table-CI8YfS4h.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CO_If2Wx.js";import"./preload-helper-DIrScT_n.js";import"./Table-diMd5iNY.js";import"./index-3V6CRxOT.js";import"./Dialog-Ltm4-WQh.js";import"./cross-pMkSGJpw.js";import"./svgIconContainer-Co1wj9K_.js";import"./useBaseUiId-DS7J75OO.js";import"./InternalBackdrop-kJ7I3CoG.js";import"./composite-CMVBbtsk.js";import"./index-Bdsk4x9T.js";import"./index-B65kqQu_.js";import"./index-BmEzYu9v.js";import"./useEventCallback-D_OYMyA3.js";import"./SkeletonBar-TBBsHigX.js";import"./LoadingCell-DJPy-_Il.js";import"./ColumnConfigDialog-W7fHJ_NL.js";import"./DraggableList-DUOjZipc.js";import"./search-C9CyrmBD.js";import"./Input-CjhSYZMH.js";import"./useControlled-DShEq97X.js";import"./isEqual-C90e21Bj.js";import"./isObject-swjZWcT8.js";import"./Button-CreK4JWQ.js";import"./ActionButton-D_CIcEZj.js";import"./Checkbox-BLUN__dJ.js";import"./useValueChanged-Dkb-WKVE.js";import"./CollapsiblePanel-CDbG0DY0.js";import"./MultiColumnSortDialog-DBNQOGqf.js";import"./MenuTrigger-Mw5Zxb32.js";import"./CompositeItem-DXRUm4lR.js";import"./ToolbarRootContext-CNkC_ExZ.js";import"./getDisabledMountTransitionStyles-CPZmqG2A.js";import"./getPseudoElementBounds-Cpf5jJJ0.js";import"./chevron-down-BW1Jk0Gy.js";import"./index-CPVhZyIF.js";import"./error-ChPfLHEW.js";import"./BaseCbacBanner-BPiM2zMm.js";import"./makeExternalStore-BwEONY5Y.js";import"./Tooltip-BFkoO91K.js";import"./PopoverPopup-CwVzquJ3.js";import"./toNumber-BDMOOKGE.js";import"./useOsdkClient-BVkWLcTH.js";import"./tick-T4PfDILy.js";import"./DropdownField-CUdK6Ljc.js";import"./withOsdkMetrics-DwfUgwww.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
