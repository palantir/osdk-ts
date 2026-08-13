import{j as i}from"./iframe-ChQS4fGd.js";import{O as p}from"./object-table-zqudqCYQ.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D8nwcXIa.js";import"./preload-helper-o8EhEng-.js";import"./Table-q5PrbWBb.js";import"./index-DZsfYQUh.js";import"./Dialog-BW8XeS8J.js";import"./cross-BqJybnVy.js";import"./svgIconContainer-UT5S-Qtm.js";import"./useBaseUiId-Dg-otjCc.js";import"./InternalBackdrop-D1vznKvg.js";import"./composite-f13ydLOS.js";import"./index-9CgMei2H.js";import"./index-nt6OvndA.js";import"./index-DjVNIh5u.js";import"./useEventCallback-D8iwCbQb.js";import"./SkeletonBar-CgCL-n5s.js";import"./LoadingCell-CQlpsd7o.js";import"./ColumnConfigDialog-zp9qo-ui.js";import"./DraggableList-EMR8XNJV.js";import"./search-BFdafJgA.js";import"./Input-BFNpbac3.js";import"./useControlled-BniVA-EE.js";import"./isEqual-3YQY8-Ph.js";import"./isObject-J1OTBo5j.js";import"./Button-CYlIk1Nd.js";import"./ActionButton-ZYvQWeAY.js";import"./Checkbox-Bw8bJgiL.js";import"./useValueChanged-B1jygDYc.js";import"./CollapsiblePanel-7L4laSgA.js";import"./MultiColumnSortDialog-D4AFgP0w.js";import"./MenuTrigger-a0Yj9qq1.js";import"./CompositeItem-Bn7WLSGF.js";import"./ToolbarRootContext-BjBgCtBr.js";import"./getDisabledMountTransitionStyles-DSHiyr0R.js";import"./getPseudoElementBounds-Cd9WAzNR.js";import"./chevron-down-DFnbRAwR.js";import"./index-Bn32b-Uw.js";import"./error-eFbYOEWl.js";import"./BaseCbacBanner-D3DhFOw9.js";import"./makeExternalStore-CrnVNZp8.js";import"./Tooltip-DiI5K9Z3.js";import"./PopoverPopup-Dqc30zxS.js";import"./toNumber-CBsqbx8y.js";import"./useOsdkClient-CUanDJGQ.js";import"./tick-BlO92Q8N.js";import"./DropdownField-d2aICtJf.js";import"./withOsdkMetrics-BCsSlf5g.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
