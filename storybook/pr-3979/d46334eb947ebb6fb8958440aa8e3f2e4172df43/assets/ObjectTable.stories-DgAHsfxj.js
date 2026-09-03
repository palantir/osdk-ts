import{j as i}from"./iframe-CK5D4Vrc.js";import{O as p}from"./object-table-odZsr0rd.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BZzAF0rX.js";import"./preload-helper--rfFAAg9.js";import"./Table-B6H8EmOv.js";import"./index-DTCKW3FC.js";import"./Dialog-MAq9T2A5.js";import"./cross-DqRqsA-Z.js";import"./svgIconContainer-B-9rvjfq.js";import"./useBaseUiId-ChiwJHU0.js";import"./InternalBackdrop-Dbr5rYW1.js";import"./composite-EY5o54z0.js";import"./index-B0VFCsPS.js";import"./index-Bf8FWlfU.js";import"./index-vAIMW8Pw.js";import"./useEventCallback-CDnpJnS0.js";import"./SkeletonBar-DauQo2dk.js";import"./LoadingCell-CgV3bQ4z.js";import"./ColumnConfigDialog-izBtKiAL.js";import"./DraggableList-CanQdJdW.js";import"./search-CQswBcjf.js";import"./Input-BkbLF__D.js";import"./useControlled-EjNIu-gh.js";import"./Button-QI0ogqOo.js";import"./small-cross-CvPfbhzU.js";import"./ActionButton-CMbHUj5v.js";import"./Checkbox-BHP2yOKQ.js";import"./useValueChanged-Bmru0ySn.js";import"./CollapsiblePanel-B9cQatbS.js";import"./MultiColumnSortDialog-BFioXfJ3.js";import"./MenuTrigger-BHa9H6Qv.js";import"./CompositeItem-GR3Crn-r.js";import"./ToolbarRootContext-fQ8fBJNz.js";import"./getDisabledMountTransitionStyles-CKHIKkcN.js";import"./getPseudoElementBounds-D8b8g-_9.js";import"./chevron-down-Bfelo19f.js";import"./index-BRqooFTa.js";import"./error-BTGDM8SC.js";import"./BaseCbacBanner-Ca5YQ56m.js";import"./makeExternalStore-BGHIEiJx.js";import"./Tooltip-L8rEht9z.js";import"./PopoverPopup-Wqv_QtzO.js";import"./debounce-BESlaVbz.js";import"./useOsdkClient-DQg5y7FA.js";import"./tick-Dc4uWMLG.js";import"./DropdownField-C2vkPRGk.js";import"./isEqual-N3gXTKiL.js";import"./withOsdkMetrics-BNMaUBqJ.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
