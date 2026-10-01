import{j as i}from"./iframe-ixnzYDJA.js";import{O as p}from"./object-table-FxZET0rZ.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DCg9GLZO.js";import"./preload-helper-DTj6niTD.js";import"./Table-DE-2Aep2.js";import"./index-CeyubrU3.js";import"./Dialog-BdjFtPMP.js";import"./cross-diJiZoAA.js";import"./svgIconContainer-CiY4wot1.js";import"./useBaseUiId-DzzMqJTn.js";import"./InternalBackdrop-Ck1Tk9Tq.js";import"./composite-CG-xrg6X.js";import"./index-DDQRM4oh.js";import"./index-Dha3uIo_.js";import"./index-EMWBONkK.js";import"./useEventCallback-PB3EUD-p.js";import"./SkeletonBar-DgekIIC1.js";import"./LoadingCell-Bt4RlXdb.js";import"./ColumnConfigDialog-BilUJCsd.js";import"./DraggableList-w52Xvsop.js";import"./search-BrEKKbX6.js";import"./Input-DVH5-_db.js";import"./useControlled-h88iCaOy.js";import"./Button-CvHMYUNQ.js";import"./small-cross-CeiH6pcZ.js";import"./ActionButton-Cht9C36-.js";import"./Checkbox-DeaULkFg.js";import"./useValueChanged-C2vQ6K14.js";import"./CollapsiblePanel-Df0hOccA.js";import"./MultiColumnSortDialog-BMQfLjDo.js";import"./MenuTrigger-ByZbYkPi.js";import"./CompositeItem-DpqiGqIY.js";import"./ToolbarRootContext-CnuOChH-.js";import"./getDisabledMountTransitionStyles-Bd-l4l0c.js";import"./getPseudoElementBounds-De5Rm4GT.js";import"./chevron-down-BsEexgTp.js";import"./index-DmvJAinh.js";import"./error-BPUNwXPy.js";import"./BaseCbacBanner-Bx1q06vG.js";import"./makeExternalStore-B3h5af1n.js";import"./Tooltip-DHz1HFpz.js";import"./PopoverPopup-p0xBFcZz.js";import"./debounce-CeVCi1dD.js";import"./useOsdkClient-BYHlAdtz.js";import"./tick-BZwA7raU.js";import"./DropdownField-Cr6FDOVB.js";import"./isEqual-B1OBGbvK.js";import"./withOsdkMetrics-6vyCE_R0.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
