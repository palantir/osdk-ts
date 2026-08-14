import{j as i}from"./iframe-DMVoJ4iR.js";import{O as p}from"./object-table-Dr0nTY0j.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-zs5JtWS1.js";import"./preload-helper-2MgHTXqS.js";import"./Table-CvfpkPsu.js";import"./index-DMn9f8R_.js";import"./Dialog-DN0C0cMa.js";import"./cross-hEjpS1Bp.js";import"./svgIconContainer-DGDnniJF.js";import"./useBaseUiId-CxU24xuc.js";import"./InternalBackdrop-BsbQ6JQ-.js";import"./composite-DmDE7Rtt.js";import"./index-B7aWWKWU.js";import"./index-C4IlvH8x.js";import"./index-Ctlvw0jX.js";import"./useEventCallback-DFJ99Ojt.js";import"./SkeletonBar-BYsHWmWc.js";import"./LoadingCell-4BXysz7o.js";import"./ColumnConfigDialog-DYAZRZRV.js";import"./DraggableList-BCWDiRF_.js";import"./search-DV_7XP2q.js";import"./Input-B15zNfFM.js";import"./useControlled-DdseA8EX.js";import"./Button-BBvvoDF0.js";import"./small-cross-By6-ZMjH.js";import"./ActionButton-DfKUt1c2.js";import"./Checkbox-CuZM5I5x.js";import"./useValueChanged-BRKcdIOc.js";import"./CollapsiblePanel-DmdilWRt.js";import"./MultiColumnSortDialog-9DXQkG4F.js";import"./MenuTrigger-DI5RRHvY.js";import"./CompositeItem-CMnhxWHR.js";import"./ToolbarRootContext-f6svvjDU.js";import"./getDisabledMountTransitionStyles-FH_XwVyu.js";import"./getPseudoElementBounds-BLc1mo6k.js";import"./chevron-down-vsY3HQGw.js";import"./index-Bi0z85-I.js";import"./error-xQuPRzcR.js";import"./BaseCbacBanner-B6viF84h.js";import"./makeExternalStore-DIAkKSQj.js";import"./Tooltip-Bmw6xpWv.js";import"./PopoverPopup-CREvbd0l.js";import"./debounce-CPaL6Cll.js";import"./useOsdkClient-Clj1Y7ye.js";import"./tick-BQBN13wH.js";import"./DropdownField-DCBCG8s7.js";import"./isEqual-DYTmDhbT.js";import"./withOsdkMetrics-B2MB7rwG.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
