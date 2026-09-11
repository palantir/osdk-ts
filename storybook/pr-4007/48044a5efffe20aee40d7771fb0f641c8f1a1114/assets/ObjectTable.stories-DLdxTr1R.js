import{j as i}from"./iframe-CZuJk2mr.js";import{O as p}from"./object-table-Sr4UqiK-.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-B819xDB8.js";import"./preload-helper-D-OLzWEl.js";import"./Table-CiJXIyql.js";import"./index-DDksSLCw.js";import"./Dialog-Cu0NEvtn.js";import"./cross-cMU2e2iq.js";import"./svgIconContainer-D_03U5sn.js";import"./useBaseUiId-oT1O9JCt.js";import"./InternalBackdrop-D7By8IzE.js";import"./composite-sxVd7y-x.js";import"./index-Db51obv8.js";import"./index-CwqMcoP9.js";import"./index-CchHo8N5.js";import"./useEventCallback-C-Y_eJLU.js";import"./SkeletonBar-KIkU-F0P.js";import"./LoadingCell-Dy5QT2-j.js";import"./ColumnConfigDialog-BJnqXzXJ.js";import"./DraggableList-DMKsNBrH.js";import"./search-2YrO29UM.js";import"./Input-CRD7X-5R.js";import"./useControlled-Bv0HDfXo.js";import"./Button-8AWdZuBH.js";import"./small-cross-Cks8he4h.js";import"./ActionButton-Y1hJnLuM.js";import"./Checkbox-BHgBtR90.js";import"./useValueChanged-B3gY-jcJ.js";import"./CollapsiblePanel-BSzHq4mN.js";import"./MultiColumnSortDialog-CoP8N9Nr.js";import"./MenuTrigger-DpjNDmx1.js";import"./CompositeItem-CuTnwCK-.js";import"./ToolbarRootContext-DCv4bsB-.js";import"./getDisabledMountTransitionStyles-wKWoptbs.js";import"./getPseudoElementBounds-B7h64O9N.js";import"./chevron-down-CxdBBEPV.js";import"./index-J1vMkA6U.js";import"./error-BX22AwHJ.js";import"./BaseCbacBanner-Cdj36LJA.js";import"./makeExternalStore-BxStD-Ll.js";import"./Tooltip-pvJM2LHO.js";import"./PopoverPopup-Cbun7Jdd.js";import"./debounce-BD5a1j86.js";import"./useOsdkClient-BPa-6pZZ.js";import"./tick-DsvM9X65.js";import"./DropdownField-v7pGuAWY.js";import"./isEqual-xDcqCKe9.js";import"./withOsdkMetrics-D7T9qYjs.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
