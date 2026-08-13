import{j as i}from"./iframe-Ct3jhQ3b.js";import{O as p}from"./object-table-DcoD00Uh.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-zY1ssSVU.js";import"./preload-helper-COHmdbwf.js";import"./Table-DTuKtZkW.js";import"./index-CgPM3gA5.js";import"./Dialog-gEwPqwK4.js";import"./cross-He-PHYhY.js";import"./svgIconContainer-DvsmJFgi.js";import"./useBaseUiId-CJ7H8A6B.js";import"./InternalBackdrop-CUWmOGHP.js";import"./composite-vVcQOeOT.js";import"./index-CCZpef3e.js";import"./index-C89TlbH2.js";import"./index-CDi56eog.js";import"./useEventCallback-B6cGOJ6l.js";import"./SkeletonBar-xKpo9Z1Z.js";import"./LoadingCell-DOixDFMt.js";import"./ColumnConfigDialog-BGhaL0oB.js";import"./DraggableList-kARAxkem.js";import"./search-DmHt-KVR.js";import"./Input-hJWV4A37.js";import"./useControlled-CrEjWPz9.js";import"./isEqual-m4kELLk6.js";import"./isObject-BedEVD4j.js";import"./Button-BDlShN-U.js";import"./ActionButton-C4F15PRz.js";import"./Checkbox-4csc6eJV.js";import"./useValueChanged-BCXDfKlq.js";import"./CollapsiblePanel-9yNoItXE.js";import"./MultiColumnSortDialog-agoS4Ejo.js";import"./MenuTrigger-DsmfFaf8.js";import"./CompositeItem-B3RwG7sH.js";import"./ToolbarRootContext-CAsR0ulO.js";import"./getDisabledMountTransitionStyles-BGm_GsgA.js";import"./getPseudoElementBounds-BYnhVZJr.js";import"./chevron-down-Cr-g2sf1.js";import"./index-DyYuYiTt.js";import"./error-DbtsfcJt.js";import"./BaseCbacBanner-DvPWyofK.js";import"./makeExternalStore-B7M8VDNS.js";import"./Tooltip-BRvtEqVQ.js";import"./PopoverPopup-Xa7WFA5W.js";import"./toNumber-fhQmxxZE.js";import"./useOsdkClient-DDGUV8GT.js";import"./tick-Cr1zVoZU.js";import"./DropdownField-CqA69UfO.js";import"./withOsdkMetrics-fRAXYRw-.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
